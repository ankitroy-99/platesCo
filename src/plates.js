import React from 'react'
import Basket from './basket';
const plates =()=>{
    const productCatalogue = {
        R01: { price: 32.95 ,name:'Red Plate'},
        G01: { price: 24.95 ,name:'Green Plate'},
        B01: { price: 7.95 ,name:'Blue Plate'},
      };
   
      const deliveryChargeRules = [
        { threshold: 90, cost: 0 },
        { threshold: 50, cost: 2.95 },
        { threshold: 0, cost: 4.95 },
      ];
      
      const specialOffers = {
        R01: { offer: 'buy-one-get-one-half-price' },
      };
    return (
        <div>
            <h1 style={{color:'white'}}>Plates Co</h1>
            <Basket productCatalogue={productCatalogue} deliveryChargeRules={deliveryChargeRules} specialOffers={specialOffers}/>
        </div>
    )

}

export default plates