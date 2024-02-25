import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../services/CookieManager';
import { removeCookie } from '../../services/CookieManager';
import {LanguageSwitcher} from "../../components/LanguageSwitcher/index"
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('application', { keyPrefix: 'navbar' });

  const user = getCookie("userAccessToken")

  const logoutHandler = () => {
    removeCookie("userAccessToken")
    navigate("/")
    window.location.reload()
  }
  return (
    <div className='absolute z-30 w-[90%] top-10 left-1/2 -translate-x-1/2'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex gap-8'>
          <h1 className='flex text-white items-center gap-2'>
            <FaLocationDot/>
            84 Forest Ave, Lake Grove, New York
          </h1>
          <h1 className='flex text-white items-center gap-2'>
            <BsFillTelephoneFill/>
            (+12) 345-678-91012
          </h1>
          <h1 className='flex text-white items-center gap-2'>
            <IoIosMail/>
            contact.colorlib@gmail.com
          </h1>
        </div>
        <div className='flex gap-4 text-white'>
          <LanguageSwitcher/>
          <FaInstagram/>
          <FaFacebookF/>
          <FaTwitter/>
        </div>
      </div>
      <div className='bg-mainWhite rounded-md px-4 flex items-center justify-between'>
        <h1 className='text-4xl font-bold text-white hover:cursor-pointer' onClick={() => navigate("/")}>
          <span className='text-mainDark'>Fly</span>
          <span className='text-mainGreen'>Pak</span>
        </h1>
        <div className='flex gap-4 text-2xl font-semibold'>
          <button className='hover:bg-hoverWhite h-20 px-4 hover:border-b-4 border-mainGreen transition-all' onClick={() => navigate("/")}>{t("home")}</button>
          {!user && <button className='hover:bg-hoverWhite h-20 px-4 hover:border-b-4 border-mainGreen transition-all' onClick={() => navigate("/signin")}>{t("login")}</button>}
          {!user && <button className='hover:bg-hoverWhite h-20 px-4 hover:border-b-4 border-mainGreen transition-all' onClick={() => navigate("/signup")}>{t("signup")}</button>}
          {user && <button className='hover:bg-hoverWhite h-20 px-4 hover:border-b-4 border-mainGreen transition-all' onClick={() => navigate("/profile")}>{t("profile")}</button>}
          {user && <button className='hover:bg-hoverWhite h-20 px-4 hover:border-b-4 border-mainGreen transition-all text-red-400' onClick={() => logoutHandler("/profile")}>{t("logout")}</button>}

        </div>
      </div>
    </div>
  )
}

export default Navbar


// {loading ? (
//   <div>Loading</div>
// ) : (
//   <>
//     <Navbar/>
//     <div className="flex flex-col gap-6">
//       <h1>Home Page</h1>

//       {user ? (
//         <div className="flex flex-row justify-between px-[6rem]">
//           <h1>Welcome {userData.name}</h1>
//           <button type="button" onClick={() => signOutHandler()} className="bg-green-600 text-white p-4 rounded">Log out</button>
//           <button type="button" onClick={() => navigate("/profile")} >Profile</button>
//         </div>
//       ) : (
//         <>
//           <button type="button" onClick={() => navigate("/signin")}>
//             Login
//           </button>
//           <button type="button" onClick={() => navigate("/signup")}>
//             Signup
//           </button>
//           <button type="button" onClick={() => navigate("/profile")} >Profile</button>
//         </>
//       )}
//     </div>
//   </>
// )}

// const navigate = useNavigate();
// const dispatch = useDispatch();
// const email = useSelector((state) => state.userState.data?.email);
// const userData = useSelector((state) => state.userState?.data)

// const [loading, setLoading] = useState();
// const [user, setUser] = useState(false);
// console.log(user)

// console.log(email)

// const getUser = async () => {
//   try {
//     setLoading(true);
//     const response = await axiosInstance.get("/getUser");
//     dispatch(addUserData(response.data));
//   } catch (error) {
//     console.log();
//   } finally {
//     setLoading(false);
//   }
// };

// useEffect(() => {
//   getUser();
// }, []);

// useEffect(() => {
//   if (email) {
//     setUser(true)
//   }
// }, [email]);

// const signOutHandler = () => {
//   removeCookie("userAccessToken")
//   dispatch(removeUserData())
//   window.location.reload();
// }