import React from "react";
import axiosInstance from "../../services/MakeBackendRequests";
import { setCookie } from "../../services/CookieManager";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminSignin = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/adminSignin", data);
      setCookie("userAccessToken", response.data?.token);
      setCookie("userAdminRole", response.data?.user?.role)
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen bg-slate-400 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 justify-center items-center w-[30%] h-[60%] p-12 border-black border-[1px] shadow-2xl rounded-xl bg-white"
      >
        <h1 className="text-start w-full font-semibold text-2xl">Admin Login</h1>
        <div className="w-[100%]">
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="outline-none h-[2.5rem] md:h-[3.75rem] transition-all hover:px-4 text-base 2xl:text-base p-2 w-full border-b-2 border-gray-600 rounded placeholder:text-black"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="w-full">
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className="outline-none h-[2.5rem] md:h-[3.75rem] transition-all hover:px-4 text-base 2xl:text-base p-2 w-full border-b-2 border-gray-600 rounded placeholder:text-black"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminSignin;
