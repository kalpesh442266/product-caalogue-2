import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
    const navigate = useNavigate();

    const onCardClick = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className="max-w-sm cursor-pointer rounded-2xl overflow-hidden shadow-lg" onClick={() => onCardClick(product.id)}>
            <div className='relative pb-[100%] h-0 overflow-hidden'>
                <img className="absolute w-full h-full start-0 top-0" src={product.images[0]} alt="Sunset in the mountains" />
            </div>
            <div className="px-6 pt-4" >
                <div className="font-bold text-xl mb-2">{product.title}</div>
            </div>
            <div className="px-6 pb-4" >
                <div className="text-md mb-2">Rs.{product.price}</div>
            </div>
        </div>
    )
}

export default ProductCard