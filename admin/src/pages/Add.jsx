import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("6000 puffs");
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [flavorInput, setFlavorInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("flavors", JSON.stringify(selectedFlavors)); // Enviar los sabores seleccionados

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setFlavors([]);
        setSelectedFlavors([]);
        setFlavorInput("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleAddFlavor = () => {
    if (flavorInput && !flavors.includes(flavorInput)) {
      setFlavors((prev) => [...prev, flavorInput]);
      setFlavorInput("");
    }
  };

  const handleToggleFlavor = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors((prev) => prev.filter((f) => f !== flavor));
    } else {
      setSelectedFlavors((prev) => [...prev, flavor]);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      {/* Image Upload Section */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Category and Price */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category (Puffs)</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="6000 puffs">6000 puffs</option>
            <option value="8000 puffs">8000 puffs</option>
            <option value="10000 puffs">10000 puffs</option>
            <option value="15000 puffs">15000 puffs</option>
            <option value="20000 puffs">20000 puffs</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="25"
          />
        </div>
      </div>

      {/* Flavors Input and List */}
      <div className="w-full">
        <p className="mb-2">Add Product Flavors</p>
        <div className="flex gap-2">
          <input
            value={flavorInput}
            onChange={(e) => setFlavorInput(e.target.value)}
            className="px-3 py-2 w-full max-w-[300px]"
            type="text"
            placeholder="Enter flavor"
          />
          <button
            type="button"
            onClick={handleAddFlavor}
            className="px-3 py-2 bg-black text-white"
          >
            Add Flavor
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {flavors.map((flavor) => (
            <div
              key={flavor}
              className={`flex items-center gap-2 px-3 py-1 cursor-pointer ${
                selectedFlavors.includes(flavor)
                  ? "bg-green-200"
                  : "bg-slate-200"
              }`}
              onClick={() => handleToggleFlavor(flavor)}
            >
              <p>{flavor}</p>
              {selectedFlavors.includes(flavor) && (
                <span className="text-green-600">✔</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
