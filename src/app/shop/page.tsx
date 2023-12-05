import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToHome from "../components/BackToHome";
import ProductCategories from "../components/ProductCategories"
import ProductList from "../components/ProductList"

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Shop() {
    return (
      <body className='min-h-screen'>
        <Header/>
        <main className="flex flex-col md:flex-row">
          <ProductCategories/>
          <div className="flex flex-col items-center justify-between flex-1">
            <h2 className="text-3xl font-bold m-4">Shop</h2>
            <ProductList/>
          </div>

        </main>
        <Footer/>
      </body>
    )
  }