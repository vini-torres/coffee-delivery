import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'

import { ProductCart } from '../../../components/ProductCart'
import { Input, InputProps } from './components/Input'
import { PaymentMethod } from './components/PaymentMethod'
import { Preface } from './components/Preface'

export function Cart() {
  const allInputs: InputProps[] = [
    { type: 'text', placeholder: 'Cep', placeholderUpperCase: true },
    { type: 'text', placeholder: 'Rua', className: 'md:col-span-3' },
    { type: 'number', placeholder: 'Número' },
    {
      type: 'text',
      placeholder: 'Complemento',
      className: 'md:col-span-2',
      opitional: true,
    },
    { type: 'text', placeholder: 'Bairro' },
    { type: 'text', placeholder: 'Cidade' },
    { type: 'text', placeholder: 'UF', placeholderUpperCase: true },
  ]

  const paymentMethods = [
    { Icon: CreditCard, value: 'Cartão de crédito' },
    { Icon: Bank, value: 'Cartão de débito' },
    { Icon: Money, value: 'Dinheiro' },
  ]

  return (
    <form className=" mx-auto mb-10 mt-32 flex max-w-[40rem] flex-col items-center gap-10 px-2 xmd:max-w-6xl xmd:flex-row xmd:items-start">
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
              {allInputs.map((input, index) => {
                return (
                  <Input
                    key={index}
                    type={input.type}
                    placeholder={input.placeholder}
                    placeholderUpperCase={input.placeholderUpperCase}
                    opitional={input.opitional}
                    className={input.className}
                  />
                )
              })}
            </div>
          </div>
          <div className="rounded bg-gray-200 p-10">
            <Preface
              Icon={CurrencyDollar}
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-0">
              {paymentMethods.map((method, index) => {
                return (
                  <PaymentMethod
                    key={index}
                    Icon={method.Icon}
                    value={method.value}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="mb-4 font-bold text-gray-700">Cafés selecionados</h3>
        <div className="rounded bg-gray-200 p-10 md:rounded-bl-3xl md:rounded-tr-3xl">
          <div className="flex max-h-[26rem] flex-col gap-6 overflow-auto [&::-webkit-scrollbar]:w-0">
            <ProductCart controls />
          </div>
          <div className="mt-5 flex flex-col gap-4">
            <p className="flex items-center justify-between text-sm text-gray-700">
              Total de itens
              <span>R$ 9.9</span>
            </p>
            <p className="flex items-center justify-between text-sm text-gray-700">
              Entrega
              <span>R$ 9.9</span>
            </p>
            <h4 className="flex items-center justify-between text-xl font-bold text-gray-800">
              Total
              <span>R$ 9.9</span>
            </h4>
          </div>
        </div>
      </div>
    </form>
  )
}
