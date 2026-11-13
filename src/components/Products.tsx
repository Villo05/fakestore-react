import React from 'react'
import { useProductContext } from '../contexts/ProductContext'
import { Product } from './Product'

function Products() {
  const {productsList, load, error }=  useProductContext()
  
  if(load){
    return(
        <p>Termékek betöltése...</p>
    )
  }
  
  if(error){
    <p>
        {error}
    </p>
  }

  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productsList.map((adat) => {
            return(
                <Product 
                    adat={adat}
                    key={adat.id}
                />
            )
        })}
    </div>
  )
}

export default Products