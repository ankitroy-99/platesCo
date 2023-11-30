import React from "react";

import { Basket } from "../basket";
import {
  productCatalogue,
  deliveryChargeRules,
  specialOffers,
} from "../../constant/constants";

export const Plates = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Plates Co</h1>
      <Basket
        productCatalogue={productCatalogue}
        deliveryChargeRules={deliveryChargeRules}
        specialOffers={specialOffers}
      />
    </div>
  );
};
