import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Cart() {
    return (
      <body className='min-h-screen'>
        <Header/><div className=""></div>
        <main className="flex flex-col items-center justify-between p-16">
          <h2 className="text-3xl font-bold m-4">Cart</h2>
          <BackToHome/>
        </main>
        <Footer/>
      </body>
    )
  }