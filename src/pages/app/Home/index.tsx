import { Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeImg from '../../../assets/Coffee.svg'
import { CoffeeData } from '../../../lib/api'
import { Advantage, AdvantageProps } from './components/Advantage'
import { Product } from './components/Product'

export function Home() {
  const advantageItens: AdvantageProps[] = [
    {
      Icon: ShoppingCart,
      description: 'Compra simples e segura',
      type: 'Cart',
    },
    {
      Icon: Package,
      description: 'Embalagem mantém o café intacto',
      type: 'Package',
    },
    {
      Icon: Timer,
      description: 'Entrega rápida e rastreada',
      type: 'Clock',
    },
    {
      Icon: ShoppingCart,
      description: 'O café chega fresquinho até você',
      type: 'Coffee',
    },
  ]

  return (
    <section className="mx-auto mb-16 mt-32 max-w-6xl space-y-16 px-2">
      <div className="xmd:text-start xmd:flex-row xmd:justify-between xmd:gap-0 flex flex-col items-center justify-center gap-4 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 md:text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="xmd:max-w-[85%] xmd:text-lg mt-4 text-gray-800">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul className="xmd:justify-normal xmd:gap-x-10 mt-12 flex flex-wrap justify-center gap-y-7">
            {advantageItens.map((item, index) => {
              return (
                <Advantage
                  key={index}
                  Icon={item.Icon}
                  description={item.description}
                  type={item.type}
                />
              )
            })}
          </ul>
        </div>
        <img src={coffeeImg} alt="Coffe image" className="hidden md:flex" />
      </div>
      <div className="space-y-16">
        <h3 className="text-xl font-bold text-gray-900">Nossos Cafés</h3>

        <div className="mt-14 flex flex-wrap justify-center gap-8 lg:justify-normal">
          {CoffeeData.map((coffee) => {
            return <Product key={coffee.id} coffee={coffee} />
          })}
        </div>
      </div>
    </section>
  )
}
