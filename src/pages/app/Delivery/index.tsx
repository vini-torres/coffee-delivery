import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { NavLink, useLocation } from 'react-router-dom'

import emptyState from '../../../assets/Illustration.svg'
import CoffeeDeliveryLoggo from '../../../assets/Logo.svg'
import { FormDataSchema, paymentMethods } from '../Cart'

interface LocationType {
  state: FormDataSchema
}

export function Delivery() {
  const { state } = useLocation() as unknown as LocationType
  return (
    <section className="mx-auto mt-10 flex max-w-6xl flex-col items-center px-2 lg:items-start">
      <NavLink to="/">
        <img src={CoffeeDeliveryLoggo} alt="Logo da Coffee Delivery" />
      </NavLink>
      <div className="mt-20 flex flex-col justify-center gap-10 lg:flex-row lg:gap-0 ">
        <div className="">
          <h2 className="text-center text-xl font-extrabold text-purple-secondary xsm:text-3xl md:text-start">
            Uhu! Pedido Confirmado
          </h2>
          <p className="text-center text-gray-800 xsm:text-start xsm:text-lg">
            Agora é só aguardar que logo o café chegará até você.
          </p>
          <div className="mt-10 flex flex-col gap-8 rounded rounded-bl-3xl rounded-tr-3xl border border-purple-secondary p-10 md:w-[32.875rem]">
            <div className="flex items-center gap-3">
              <MapPin
                size={28}
                className="rounded-full bg-purple-primary p-1 text-white"
              />
              <div className="text-sm text-gray-800">
                <p>
                  Entrega em{' '}
                  <span className="font-bold">
                    {state.street}, {state.number}
                  </span>
                </p>
                <span>
                  {state.district} - {state.city}, {state.uf}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Timer
                size={28}
                className="rounded-full bg-yellow-primary p-1 text-white"
              />
              <div className="text-sm text-gray-800">
                <p>Previsão de entrega</p>
                <span className="font-bold">20 min - 30 min</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CurrencyDollar
                size={28}
                className="rounded-full bg-yellow-secondary p-1 text-white"
              />
              <div className="text-sm text-gray-800">
                <p>Pagamento na entrega</p>
                <span className="font-bold">
                  {paymentMethods[state.paymentMethod].label}
                </span>
              </div>
            </div>
          </div>
        </div>
        <img src={emptyState} alt="" className="hidden xsm:flex" />
      </div>
    </section>
  )
}
