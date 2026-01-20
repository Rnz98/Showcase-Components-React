import { useEffect, useState } from "react";
import productsData from "../data/products.json";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image_url: string;
};

export const useCart = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [cart, setCart] = useState<{ [id: number]: number }>({});

  const cartItems = products.filter(
    (product) => (cart[product.id] || 0) > 0
  );

  const total = cartItems.reduce((sum, product) => {
    return sum + product.price * (cart[product.id] || 0);
  }, 0);

  useEffect(() => {
    fetch("../data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const increase = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrease = (id: number) => {
    setCart((prev) => {
      const newAmount = (prev[id] || 0) - 1;
      const updated = { ...prev };
      if (newAmount <= 0) delete updated[id];
      else updated[id] = newAmount;
      return updated;
    });
  };

  return { products, cart, cartItems, total, increase, decrease };
};