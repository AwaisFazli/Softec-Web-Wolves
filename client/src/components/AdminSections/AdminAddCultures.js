import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../services/MakeBackendRequests";
import { CgClose } from "react-icons/cg";

const AdminAddCultures = ({ setAddCultureModal }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("history", data.history);
      formData.append("thingsToDo", data.thingsToDo);
      formData.append("spotsName", data.spotsName);

      if (data.image[0]) {
        formData.append("image", data.image[0]);
      }
      const response = await axiosInstance.post("/addCulture", formData);
      setAddCultureModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed h-screen w-screen bg-black inset-0 bg-opacity-55 flex items-center justify-center z-50">
      <div className="bg-white px-12 pb-12 rounded-lg overflow-scroll h-[80%] w-[89%]">
        <div className="py-6" onClick={() => setAddCultureModal(false)}>
          <CgClose size={35} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-7 justify-center items-center w-full"
        >
          <div className="w-full">
            <input
              type="text"
              id="email"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Name"
              className="outline-none h-[2.5rem] md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full border border-gray-500 rounded placeholder:text-black"
            />
            {errors.name && (
              <span className="text-red-400">{errors.name?.message}</span>
            )}
          </div>

          <div className="w-full">
            <textarea
              type="textarea"
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Description"
              className="outline-none md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full h-[300px] border border-gray-500 rounded placeholder:text-black"
              style={{ height: "150px" }}
            />
            {errors.description && (
              <span className="text-red-400">{errors.description.message}</span>
            )}
          </div>

          <div className="w-full">
            <textarea
              type="textarea"
              {...register("history", { required: "History is required" })}
              placeholder="History"
              className="outline-none md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full h-[300px] border border-gray-500 rounded placeholder:text-black"
              style={{ height: "150px" }}
            />
            {errors.history && (
              <span className="text-red-400">{errors.history.message}</span>
            )}
          </div>

          <div className="w-full">
            <textarea
              type="textarea"
              {...register("thingsToDo", {
                required: "Things to do is required",
              })}
              placeholder="Things to do (comma separated)"
              className="outline-none md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full h-[300px] border border-gray-500 rounded placeholder:text-black"
              style={{ height: "150px" }}
            />
            {errors.thingsToDo && (
              <span className="text-red-400">{errors.thingsToDo.message}</span>
            )}
          </div>
          <div className="w-full">
            <select
              {...register("spotsName", {
                required: "Spots Name is required",
              })}
              className="outline-none md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full border border-gray-500 rounded"
            >
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="Cultural Attractions">Cultural Attractions</option>
              <option value="Historical Sites">Historical Sites</option>
            </select>
            {errors.spotsName && (
              <span className="text-red-400">{errors.spotsName.message}</span>
            )}
          </div>
          <div>
            <input
              type="file"
              id="image"
              {...register("image", {
                validate: (value) => {
                  if (value.length > 0) {
                    const imageFile = value[0];
                    return imageFile.type.startsWith("image/")
                      ? true
                      : "Invalid file type. Please select an image file.";
                  }
                  return true;
                },
              })}
              className="outline-none h-[2.5rem] md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full border border-gray-500 rounded placeholder:text-black"
            />
            {errors.image && (
              <span className="text-red-400">{errors.image?.message}</span>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddCultures;
