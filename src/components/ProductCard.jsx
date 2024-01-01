import React from 'react'


function ProductCard() {
  return (
    <div className='col-3'>
    <div className='product-card'>
      <div className='product-image'>
      <img src='images/watch.jpg' className='img-fluid' alt='product-img'/>
      </div>
      <div className='product-card-details'>
        <h6 className='brand'>Rolex</h6>
        <h5 className='product-title'>Carribien Wonder</h5>
      
        <p className='price'>₹1,39990</p>
      </div>
    </div>
      
    </div>
  )
}

export default ProductCard