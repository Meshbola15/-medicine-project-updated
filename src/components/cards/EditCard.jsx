import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const EditCard = ({ item, deleteItem, editItem }) => {
  const { name, price, desc, dosage, id } = item;
  return (
    <div className="w-full">
      <article className="p-4 bg-neutral-50 shadow-lg rounded-lg mt-10">
        <h2>Name: {name}</h2>
        <h2>price: {price}</h2>
        <h2>dosage: {dosage}</h2>
        <h2>description: {desc}</h2>

        <div className="flex flex-row justify-start items-center">
          <BiEdit
            size={30}
            className="text-green-400 cursor-pointer hover:scale-105 hover:text-green-500"
            onClick={(e) => editItem(item.id)}
          />
          <AiFillDelete
            size={30}
            className="text-red-400 cursor-pointer hover:scale-105 hover:text-red-500"
            onClick={(e) => deleteItem(item.id)}
          />
        </div>
      </article>
    </div>
  );
};

export default EditCard;
