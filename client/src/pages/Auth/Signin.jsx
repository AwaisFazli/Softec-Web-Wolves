import React from "react";
import axiosInstance from "../../services/MakeBackendRequests";
import { setCookie } from "../../services/CookieManager";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        const response = await axiosInstance.post('/signin', data)
        setCookie("userAccessToken", response.data?.token)
        navigate("/")
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div className="h-screen w-scree">
      <div className="w-screen h-screen flex">
        <div className="absolute top-10 left-10 z-40 p-5 hover:translate-x-2 transition-all rounded-full bg-white cursor-pointer" onClick={() => navigate("/")}><FaArrowLeft size={32}/></div>
        <div className="h-full w-[65%] relative overflow-hidden">
          <img src="https://images.ctfassets.net/0wjmk6wgfops/2S36YEBZQpXvo5gythmoZ1/6fd70e9033f37552796396adfc4edc4f/farshad_rezvanian_Eelegt4hFNc_unsplash_fefcd04d-c9b3-4956-8c4f-b1da3e5d4d09.jpg?q=70" alt=""
          className="h-full w-full object-cover" />
          <div className="absolute inset-0 h-full w-full bg-mainGreen bg-opacity-70" />
          <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-start z-10 mb-10">
            <h1 className="text-white text-6xl font-medium w-[70%] pl-8 mb-8">Time To Travel Accross Globe</h1>
            <p className="text-white text2xl font-medium w-[60%] pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum autem aliquam vel recusandae excepturi officia necessitatibus commodi quaerat est esse repellat quidem, dicta aperiam nulla eaque ducimus odio. Repellat?</p>
          </div>
        </div>
        <div className="h-full w-[35%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium mb-16">Login in to your Account</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 justify-center items-center w-[90%]">
          <div className="w-full">
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
              className="outline-none h-[2.5rem] md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full border border-gray-500 rounded placeholder:text-black"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="w-full">
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="outline-none h-[2.5rem] md:h-[3.75rem] 2xl:px-[1.5rem] text-base 2xl:text-base p-2 w-full border border-gray-500 rounded placeholder:text-black"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button className="w-full h-[2.5rem] md:h-[3.75rem] bg-mainGreen p-2 text-white font-medium text-xl" type="submit">Submit</button>
        </form>
        <div className="flex justify-end text-[#0f4f31] cursor-pointer mt-[10px]" onClick={() => navigate("/signup")}>Don't have an Account? Sign up!</div>
        
        </div>
      </div>
    </div>
  );
};

export default SignIn;
