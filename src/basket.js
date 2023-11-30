import React, { useState,useEffect } from 'react';
 
const Basket = ({ productCatalogue, deliveryChargeRules, specialOffers }) => {
  const [products, setProducts] = useState([]);
  const [dCharge,setDeliveryCharge] = useState(0)
  const [totalCost,setTotalCost] = useState(0)
 
  
  useEffect(()=>{
    calculateTotal()
  },[products])
  const addProduct = (productCode) => {
    setProducts([...products, productCode]);
  };

  const removeProduct = (productCode) => {
    const updatedProducts = products.filter((p) => p !== productCode);
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    
    let total = products.reduce((acc, productCode) => {
      const product = productCatalogue[productCode];
      acc += product.price;
      return acc;
    }, 0);

    // Apply special offers
    const productsCount = {};
    products.forEach((productCode) => {
      productsCount[productCode] = (productsCount[productCode] || 0) + 1;
    });

    Object.keys(productsCount).forEach((code) => {
      const count = productsCount[code];
      const offer = specialOffers[code];
      if (offer && offer.offer === 'buy-one-get-one-half-price') {
        const eligibleCount = Math.floor(count / 2);
        const discount = (productCatalogue[code].price / 2) * eligibleCount;
        total -= discount;
      }
    });

    // Apply delivery charge rules
  const   deliveryCharge = deliveryChargeRules.find(
      (rule) => total >= rule.threshold
    ).cost;

    setDeliveryCharge(deliveryCharge)
    if(total>0){
        total += deliveryCharge;
        
    }
    setTotalCost(total.toFixed(2))
  };
  

  return (
    <div className="main-div">
    <div className="product-section">
    <h2 className="productHeader">Products</h2>
        <ul className="productBlock">
        {Object.keys(productCatalogue).map((productCode) => (
            
            <li key={productCode} className="product-list">
            <span>{productCatalogue[productCode].name} - ${productCatalogue[productCode].price}</span>
            <div className="buttonStyle">
                <button type="button" className="btn btn-primary" onClick={() => addProduct(productCode)}>Add</button>
                <button type="button" className="btn btn-danger" onClick={() => removeProduct(productCode)}>Remove</button>
            </div>         
            </li>
            
        ))}
    </ul>
    </div> 
  <div className="basket-section">
    <h2 className="basketItem">Basket Total</h2>
    <p className="basketItem">Delivery Charge : ${products.length>0? dCharge:0}</p>
    <p>Total: ${totalCost}</p>
    </div>
  </div>
  );
};

export default Basket;



