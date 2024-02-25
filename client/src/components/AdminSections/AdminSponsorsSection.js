import React, {useState, useEffect} from 'react'
import AdminAddSponsors from './AdminAddSponsor';
import axiosInstance from '../../services/MakeBackendRequests';

const AdminSponsorsSection = () => {
    const [cultures, setCultures] = useState([]);
    const [addSponsorModal, setAddSponsorModal] = useState(false)
    const cultureModalHandler = (toggle) => {
        setAddSponsorModal(toggle);
        console.log(toggle);
      };

      useEffect(() => {
        const fetchCultures = async () => {
          try {
            const response = await axiosInstance.get("/getSponsors");
            setCultures(response.data);
            console.log(response.data)
          } catch (error) {
            console.log(error);
          }
        };
        fetchCultures();
      }, []);
    
  return (
    <div>
      <div className="px-16 mb-10">
        {addSponsorModal &&
        <AdminAddSponsors setAddSponsorModal={setAddSponsorModal}/>}
        <button
          className="px-16 py-4 bg-mainGreen text-white"
          onClick={() => cultureModalHandler(true)}
        >
          Add Sponsors
        </button>
      </div>

      <div className="flex gap-4 flex-wrap items-center justify-center">
        {cultures.map((culture, index) => {
          return (
            <div className=" h-[400px] w-[450px] rounded-2xl overflow-hidden bg-hoverWhite">
              <div className="w-full h-[80%]">
                <img
                  src={culture.imageUrl}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="py-2 px-4">
                <h1 className="text-2xl font-medium mb-2">{culture.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AdminSponsorsSection
