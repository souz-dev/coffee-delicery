import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { CompleteOrderContainer } from './styles'
import { CompleteOrderForm } from './components/completeOrderForm'
import { SelectedCoffees } from './components/slectedCoffees'
import { useCart } from '../../hooks/useCart'
enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe o Estado'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })
  const { onClearCart } = useCart()
  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })
    onClearCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
