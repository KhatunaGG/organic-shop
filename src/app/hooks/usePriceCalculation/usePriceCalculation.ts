import { useMemo } from "react";

type CartItemType = { price: number; count: number; sale?: number };

const usePriceCalculation = (shoppingCartItems: CartItemType[]) => {
  const calculateTotalPrice = useMemo(() => {
    return shoppingCartItems.reduce((total, item) => {
      const itemPrice = item.sale || item.price;
      const itemCount = item.count | 0;
      return total + itemPrice * itemCount;
    }, 0);
  }, [shoppingCartItems]);

  const calculateShipping = useMemo(() => {
    return calculateTotalPrice <= 50 ? 3.99 : 0;
  }, [calculateTotalPrice]);

  const calculateForPayment = useMemo(() => {
    return calculateTotalPrice + calculateShipping;
  }, [calculateTotalPrice, calculateShipping]);

  return {
    orderTotalPrice: calculateTotalPrice,
    shipping: calculateShipping,
    forPayment: calculateForPayment,
  };
};

export default usePriceCalculation;
