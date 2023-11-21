import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function TestPage() {
    return (
      <body className='min-h-screen'>
        <Header/>
        <main className="flex flex-col items-center justify-between p-16">
          <h1 className="text-3xl font-bold m-4">Hello, Test Page!</h1>
          <BackToHome/>
        <Footer/>
        </main>
      </body>
    )
  }