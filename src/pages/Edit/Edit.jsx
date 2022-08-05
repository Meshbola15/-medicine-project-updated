import React, { useState, useEffect } from "react";
import EditCard from "../../components/cards/EditCard";
import Input from "../../components/Input/Input";
import { useGlobalContext } from "../../context/context";
import medicalDataService from "../../services/Medicial.services";
import Alert from "../../components/Alert/Alert";

const Edit = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dosage, setDosage] = useState("");
  const [desc, setDesc] = useState("");
  const [editID, setEditID] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const { list, loading, showAlert, alert, getData, searchTerm } = useGlobalContext();

  useEffect(() => {
    if (loading) {
      return (
        <h2 className="text-5xl text-center m-20 uppercase absolute top-4">
          Loading...
        </h2>
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || price === "" || dosage === "") {
      showAlert(true, "danger", "Please input a value");
      return;
    }
    const newItem = {
      name,
      price,
      dosage,
      desc,
    };
    try {
      if (editID !== undefined && editID !== "") {
        await medicalDataService.updateMedical(editID, newItem);
        setEditID("");
        setIsEditing(false);
        showAlert(true, "success", "Updated successfully!");
      } else {
        await medicalDataService.addMedical(newItem, editID);
        showAlert(true, "success", "Item added successfully");
      }
    } catch (error) {
      showAlert(true, "danger", error.message);
      setIsEditing(false);
    }

    setPrice("");
    setName("");
    setDesc("");
    setDosage("");
  };

  const deleteItems = async (id) => {
    await medicalDataService.deleteMedical(id);
    getData();
  };

  const getEditHandler = (id) => {
    setEditID(id);
    console.log(id);
  };

  const editHandler = async () => {
    try {
      setIsEditing(true);
      const docSnap = await medicalDataService.getMedicial(editID);
      setName(docSnap.data().name);
      setPrice(docSnap.data().price);
      setDesc(docSnap.data().desc);
      setDosage(docSnap.data().dosage);
    } catch (error) {
      showAlert(true, "danger", error.message);
    }
  };

  useEffect(() => {
    if (editID !== undefined && editID !== "") {
      editHandler();
      console.log(editID);
    }
  }, [editID]);

  return (
    <div className="py-32">
      <section className="w-[90%] flex flex-col justify-center items-center md:w-[70%] mx-auto bg-white mt-10 p-4 shadow-lg rounded-3xl">
        <h2 className="text-center text-4xl font-black">Edit Items</h2>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col item-center justify-start pt-4 w-full"
        >
          <Input
            label="Name"
            placeholder="type something..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="price"
            placeholder="Set a Price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            label="Dosage"
            placeholder="type dosage..."
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
          <Input
            label="Description"
            placeholder="describe it..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-300 p-2 rounded-full text-2xl text-white shadow-md hover:bg-orange-300 active:bg-red-300  w-auto "
          >
            {isEditing ? "edit" : "submit"}
          </button>
        </form>

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
          .map((items) => {
            return (
              <EditCard
                item={items}
                key={items.id}
                {...list}
                deleteItem={deleteItems}
                editItem={getEditHandler}
              />
            );
          })}
      </section>
    </div>
  );
};

export default Edit;
