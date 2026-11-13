import type { productType } from "../types/productType"

interface ProductProps{
    adat: productType
}

export function Product({adat}:ProductProps){
    return(
        <article className="bg-[#e2d9ce] rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col m-2">
            <div className="flex items-center justify-center h-56 p-3">
                <img
                    src={adat.image}
                    alt={adat.title}
                    className="max-h-full object-contain"
                />
            </div>
            <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-gray-500 mb-2">
                    {adat.category}
                    </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                    {adat.title}
                    </h2>
                <p className="text-2xl font-bold text-yellow-800 mt-auto mb-4">
                    {adat.price} $
                    </p>
                <p className="text-sm text-gray-500 mb-2">
                    {adat.description}
                </p>
            </div>
        </article>
    )
}