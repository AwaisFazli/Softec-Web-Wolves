import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/MakeBackendRequests";
import AdminAddCultures from "./AdminAddCultures";
import { useNavigate } from "react-router-dom";

const AdminCulturesSection = () => {
  const [cultures, setCultures] = useState([]);
  const [addCultureModal, setAddCultureModal] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchCultures = async () => {
      try {
        const response = await axiosInstance.get("/getCultures");
        setCultures(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCultures();
  }, []);
  console.log(addCultureModal);

  const cultureModalHandler = (toggle) => {
    setAddCultureModal(toggle);
    console.log(toggle);
  };

  return (
    <div className="flex p-4 flex-col">
      {addCultureModal && <AdminAddCultures setAddCultureModal={setAddCultureModal}/>}
      <div className="px-16 mb-10">
        <button
          className="px-16 py-4 bg-mainGreen text-white"
          onClick={() => cultureModalHandler(true)}
        >
          Add Cultures
        </button>
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {cultures.map((culture, index) => {
          return (
            <div className=" h-[400px] w-[450px] rounded-2xl overflow-hidden bg-hoverWhite">
              <div className="w-full h-1/2">
                <img
                  src={culture.imgUrl}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="py-2 px-4">
                <h1 className="text-2xl font-medium mb-2">{culture.name}</h1>
                <p className="w-full h-24 overflow-hidden opacity-75 whitespace-pre-line line-clamp-4">
                  {culture.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminCulturesSection;
