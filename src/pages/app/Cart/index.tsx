import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  ShoppingBagOpen,
} from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { ProductCart } from '../../../components/ProductCart'
import { useCart } from '../../../hooks/useCart'
import { PriceFormatted } from '../../../utils/formatted-price'
import { Input } from './components/Input'
import { PaymentMethod } from './components/PaymentMethod'
import { Preface } from './components/Preface'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

export const cartSchemaValidation = z.object({
  cep: z.string().min(1, 'Informe o cep'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'UF'),
  district: z.string().min(1, 'Informe a bairro'),
  complement: z.string(),
  paymentMethod: z.nativeEnum(PaymentMethods),
})

export type FormDataSchema = z.infer<typeof cartSchemaValidation>

export const paymentMethods = {
  credit: {
    icon: CreditCard,
    label: 'Cartão de crédito',
  },
  debit: {
    icon: Bank,
    label: 'Cartão de débito',
  },
  money: {
    icon: Money,
    label: 'Dinheiro',
  },
}

export function Cart() {
  const { cart, totalValueOfItems } = useCart()
  const navigate = useNavigate()

  const methods = useForm<FormDataSchema>({
    resolver: zodResolver(cartSchemaValidation),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const handleSubmitForm = (data: FormDataSchema) => {
    console.log(data)
    if (data) {
      navigate('/delivery', { state: data })
    }
  }

  const deliveryValue = 3.5
  const finalPriceWithDelivery = totalValueOfItems + deliveryValue

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className=" mx-auto mb-10 mt-32 flex max-w-[40rem] flex-col items-center gap-10 px-2 xmd:max-w-6xl xmd:flex-row xmd:items-start"
      >
        <div className="w-full">
          <h3 className="mb-4 font-bold text-gray-700">Complete seu pedido</h3>
          <div className="flex w-full max-w-[40rem] flex-col gap-3">
            <div className="rounded bg-gray-200 p-10">
              <Preface
                Icon={MapPin}
                title="Endereço de Entrega"
                description="Informe o endereço onde deseja receber seu pedido"
              />
              <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-[12.5rem,_17rem,_3.75rem]">
                <Input
                  type="text"
                  placeholder="Cep"
                  placeholderUpperCase
                  {...register('cep')}
                  error={errors?.cep?.message}
                />
                <Input
                  type="text"
                  placeholder="Rua"
                  className="md:col-span-3"
                  {...register('street')}
                  error={errors?.street?.message}
                />
                <Input
                  type="number"
                  placeholder="Número"
                  {...register('number')}
                  error={errors?.number?.message}
                />
                <Input
                  type="text"
                  placeholder="Complemento"
                  opitional
                  className="md:col-span-2"
                  {...register('complement')}
                />
                <Input
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                  error={errors?.district?.message}
                />
                <Input
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                  error={errors?.city?.message}
                />
                <Input
                  type="text"
                  placeholder="Uf"
                  placeholderUpperCase
                  {...register('uf')}
                  error={errors?.uf?.message}
                />
              </div>
            </div>
            <div className="rounded bg-gray-200 p-10">
              <Preface
                Icon={CurrencyDollar}
                title="Pagamento"
                description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              />

              <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-0">
                {Object.entries(paymentMethods).map(
                  ([key, { label, icon }]) => {
                    return (
                      <PaymentMethod
                        id={key}
                        key={label}
                        Icon={icon}
                        label={label}
                        value={key}
                        {...register('paymentMethod')}
                      />
                    )
                  },
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="mb-4 font-bold text-gray-700">Cafés selecionados</h3>
          <aside className="rounded bg-gray-200 p-10 md:rounded-bl-3xl md:rounded-tr-3xl">
            <div className="mb-4 flex items-center gap-2">
              <ShoppingBagOpen className="text-purple-primary" size={20} />
              <p className=" text-gray-800">Carrinho</p>
            </div>
            <div className="flex max-h-[26rem] flex-col gap-6 overflow-auto [&::-webkit-scrollbar]:w-0">
              {cart.map((cart) => (
                <ProductCart key={cart.id} coffee={cart} controls />
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <p className="flex items-center justify-between text-sm text-gray-700">
                Total de itens
                <span>R$ {PriceFormatted(totalValueOfItems)}</span>
              </p>
              <p className="flex items-center justify-between text-sm text-gray-700">
                Entrega
                <span>
                  R$ {PriceFormatted(cart.length === 0 ? 0 : deliveryValue)}
                </span>
              </p>
              <h4 className="flex items-center justify-between text-xl font-bold text-gray-800">
                Total
                <span>
                  R${' '}
                  {PriceFormatted(
                    cart.length === 0 ? 0 : finalPriceWithDelivery,
                  )}
                </span>
              </h4>
            </div>
            <button
              type="submit"
              disabled={cart.length === 0}
              className="mt-4 h-11 w-full rounded bg-purple-primary text-center text-xs uppercase text-white transition-colors duration-200 enabled:hover:bg-purple-secondary disabled:cursor-not-allowed disabled:bg-opacity-80"
            >
              Confirmar Pedido
            </button>
          </aside>
        </div>
      </form>
    </FormProvider>
  )
}
