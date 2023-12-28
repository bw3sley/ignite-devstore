import { Suspense } from 'react'

import Link from 'next/link'

import Image from 'next/image'

import { CartWidget } from './cart-widget'

import { SearchForm } from './search-form'

// Hard navigation: zero tudo que foi carregado e recarrego tudo do 0 (<a href="/"></a>)
// Soft navigation: o next só faz a navegação, sem carregar tudo (useRouter)

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </nav>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>

          <Image
            src="https://github.com/bw3sley.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}
