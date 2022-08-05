import React, { useEffect } from "react";
import ItemCard from "../../components/cards/ItemCard";
import { useGlobalContext } from "../../context/context";

const Home = () => {
  const { list, loading, searchTerm } = useGlobalContext();
  useEffect(() => {
    if (loading) {
      return (
        <h2 className="text-5xl text-center m-20 uppercase">
          Loading... 50147104
        </h2>
      );
    }
  }, []);
  return (
    <div className="py-32 w-full">
      {list
        .filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return <ItemCard item={item} key={item.id} {...list} />;
        })}
    </div>
  );
};

export default Home;
