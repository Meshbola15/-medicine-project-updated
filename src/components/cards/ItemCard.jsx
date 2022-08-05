import React from "react";

const ItemCard = ({ item }) => {
  const { name, desc, price, dosage } = item;
  return (
    <div>
      <article className="w-auto md:min-w-[30%] h-auto p-4 m-6 pt-3 space-y-3 bg-neutral-100 rounded-xl shadow-md">
        <h2>name: {name}</h2>
        <h2>price: {price}</h2>
        <h2>dosage: {dosage}</h2>
        <h2>description: {desc}</h2>
      </article>
    </div>
  );
};

export default ItemCard;
