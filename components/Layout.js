import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Layout({title, children}) {
  return (
    <>
        <Head>
            <title>{title ? title + 'Amazona' : 'Amazona'}</title>
            <meta name="description" content="Ecommerce website" />
        </Head>
        <div className='flex min-h-screen flex-col justify-between'>
            <header>
                <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
                    <Link href="/">
                        <div className='text-lg font-bold'>Amazona</div>
                    </Link>
                    <div>
                        <Link href="/cart"><span className='p-2'>Cart</span></Link>
                        <Link href="/login"><span className='p-2'>Login</span></Link>
                    </div>
                </nav>
            </header>
            <main className='container m-auto mt-4 px-4'>
                {children}
            </main>
            <footer className='flex h-10 justify-center items-center shadow-inner'>
                <p>Copyright @ 2024 Amazona</p>
            </footer>
        </div>
    </>
  )
}
