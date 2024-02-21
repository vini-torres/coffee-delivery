import { CurrencyDollar, MapPin } from 'phosphor-react'

import { Input, InputProps } from './components/Input'
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

  return (
    <form className="mx-auto mt-32 max-w-6xl px-2">
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
        </div>
      </div>
    </form>
  )
}
