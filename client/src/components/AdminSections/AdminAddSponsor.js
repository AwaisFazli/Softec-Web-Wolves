import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../services/MakeBackendRequests";
import { CgClose } from "react-icons/cg";

const AdminAddSponsors = ({ setAddSponsorModal }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);

      if (data.image[0]) {
        formData.append("image", data.image[0]);
      }
      const response = await axiosInstance.post("/addSponsor", formData);
      setAddSponsorModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed h-screen w-screen bg-black inset-0 bg-opacity-55 flex items-center justify-center z-50">
      <div className="bg-white px-12 pb-12 rounded-lg overflow-scroll h-[80%] w-[89%]">
        <div className="py-6" onClick={() => setAddSponsorModal(false)}>
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

export default AdminAddSponsors;
