import React from 'react'
import ProductCard from './ProductCard'
import { useLoaderData } from 'react-router-dom';

function ProductGrid() {
    const products = useLoaderData();

    return (
        <div className='bg-gray-100 py-20 px-10'>
            <div className='text-3xl mb-10 font-semibold'>Products</div>
            <div className=" grid grid-cols-4 gap-10">
                {products && products.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductGrid