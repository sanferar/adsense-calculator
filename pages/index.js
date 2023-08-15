import Head from 'next/head'
import { Inter } from 'next/font/google'
import { ContenedorPadre } from '@/src/componentes/contenedor-padre'
import { ContenedorInfo } from '@/src/componentes/contenedorInfo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora publicidad Adsense</title>
        <meta name="description" content="Desarrollado por Sanferar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
      <ContenedorInfo />
      <ContenedorPadre />
      </main>
   </>
  )
}
