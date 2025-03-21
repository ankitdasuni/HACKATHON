import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContex';
import { assets } from '../assets/assets_frontend/assets';

function Appointments() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')
  const fetchDocInfo = () => {
    const doc = doctors.find(doc => doc._id === docId);
    if (doc) setDocInfo(doc);
  };

  const getAvailableSlots = () => {
    let today = new Date();
    let slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    if (doctors.length) {
      fetchDocInfo();
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    <div className='flex flex-col  gap-4'>
      {/* Doctor Details */}
      {docInfo && (
        <>
          <div className=' flex-row sm:flex  sm:gap-3' >
            <img className='bg-green-100 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
            <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0'>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {docInfo.name}
              <img className='w-5' src={assets.verified_icon} alt="" />
            </p>
            <div className='flex items-center gap-2 text-gray-600'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-05 px-2 border text-xs rounded-full'>{docInfo.experience} yrs</button>
            </div>
            <p className='text-sm text-gray-500 max-w-[700px] mt-2'>
              {docInfo.about || "No description available."}
            </p>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment Fee: {currencySymbol}<span className='text-gray-600'>{docInfo.fees}</span>
            </p>
          </div>
          </div>
          
        </>
      )}

      {/* Booking Slot */}
      <div className='flex flex-col item-center justify-center'>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slot</p>
        <div className='flex flex-row gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div onClick={()=>setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ?'bg-blue-600 text-white':'border border-gray-200'} `}>
                <p className='font-semibold'>{item[0] && daysOfWeek[new Date(item[0].datetime).getDay()]}</p>
                <p className='text-white-600'>{item[0] && new Date(item[0].datetime).getDate()}</p>
              </div>
            ))}
        </div>
      </div>
      <div  className='flex item-center gap-3 w-full overflow-x-scroll mt-4'>
        {
          docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-5 rounded-full cursor-pointer ${slotTime === item.time ?'bg-blue-600 text-white':'border border-gray-200'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))
        }
      </div>
      </div>
    </div>
  );
}

export default Appointments;
