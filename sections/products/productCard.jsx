import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="single-products-box">
            <div className="products-image">
                <Link to="/single-products" className="main-image">
                    <img src={product.image} className="main-image" alt="image" />
                </Link>
                {product.saleTag && <div className="sale-tag">Sale!</div>}
                <Link to="/cart" className="default-btn"><i className="bx bxs-cart-add" /> <span>Add To Cart</span></Link>
                {product.newTag && <div className="new-tag">New!</div>}
            </div>
            <div className="products-content">
                <h3><Link to="/single-products">{product.name}</Link></h3>
                <div className="price">
                    <span className="old-price">{product.oldPrice}</span>
                    <span className="new-price">{product.newPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard