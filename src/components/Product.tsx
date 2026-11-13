import type { productType } from "../types/productType"

interface ProductProps{
    adat: productType
}

export function Product({adat}:ProductProps){
    return(
        <article>
            <div>
                <img
                    src={adat.image}
                    alt={adat.title}
                />
            </div>
            <p>{adat.category}</p>
            <h2>{adat.title}</h2>
            <p>{adat.price} $</p>
            <p>{adat.description}</p>
            
        </article>
    )
}