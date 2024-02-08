import { Metadata } from "next";
import React from "react";
import { CartCounter } from "../../../shopping-cart/components/CartCounter";

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Un simple contador',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={0} />
    </div>
  );
}
