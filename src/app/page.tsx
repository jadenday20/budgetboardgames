import Link from 'next/link'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <body className='min-h-screen'>
    <Header/>
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/dashboard/" className="bg-blue-600 text-white p-4 rounded-lg underline hover:bg-blue-500 duration-500">This is a test link</Link>
    </main>
    <Footer/>
    </body>
    </>
  )
}
