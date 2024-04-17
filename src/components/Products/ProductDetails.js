import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

function ProductDetails() {
    const params = useParams()
    const productDetail = useLoaderData(params.id)
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='mb-5 inline-block cursor-pointer' onClick={() => { navigate(-1) }}>
                    {`< Back`}
                </div>
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className='relative pb-[100%] h-0 overflow-hidden'>
                            <img className="absolute w-full h-full start-0 top-0" src={productDetail.images[0]} alt="Sunset in the mountains" />
                        </div>
                        <div className="flex -mx-2 my-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{productDetail.title}</h2>

                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700">Price:</span>
                                <span className="text-gray-600">Rs. {productDetail.price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Availability:</span>
                                <span className="text-gray-600"> {productDetail.stock > 0 ? "In Stock" : "Out of stock"} </span>
                            </div>
                        </div>

                        <div>
                            <span className="font-bold text-gray-700">Product Description:</span>
                            <p className="text-gray-600 text-sm mt-2">
                                {productDetail.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails