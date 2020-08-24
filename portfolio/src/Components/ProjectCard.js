import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="container xsm border mb-4 rounded overflow-hidden">
            
            <div
                style={{
                    'backgroundImage': `url('')`                    
                }}
                className="w-full h-64 bg-blue bg-cover"
            >
            </div>
            
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    name
                </h3>
            <div className="font-bold mb-3">
                description
            </div>
            <div>
            <div /*to ={`/products/${props.product.id}`}*/
                  className="bg-blue-500 text-white p-2 flex justify-center"
            >
                View
            </div>
            </div>
            </div>
        </div>
    )
}


export default ProductCard 