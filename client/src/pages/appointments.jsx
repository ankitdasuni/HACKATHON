import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContex'
import { assets } from '../assets/assets_frontend/assets'


function appointments() {
  
  const daysOfWeek =['Sun' ,'Mon', 'Tue','Wed','Fri','Sat']
  const {docId}   = useParams()
  // console.log(docId)
  const {doctors , currencySymbol} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState("")
  const [docSlots,setDocSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  } 
  const getAvailableSlots = async()=>{
    setDocSlots([])
    //current date
    let today = new Date()

    for(let i =0;i<7;i++){
      let currentDate = new Date(today)
      currentDate=setDate(today.getDate()+i)
      let endTime = new Date(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if (today.getDate() === current.getDate()){
        currentDate.setHours (currentDate.getHours()>10? currentDate.getHours()+1:10)
        currentDate.setMinutes(currentDate()>30?30:0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots = []
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        timeSlots.push(
          {
            datetime: new Date(currentDate),
            time : formattedTime
          }
        )
        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocSlots(prev =>([...prev,timeSlots]))
    }

  } 

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
    
  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return  (
    <div className='flex flex-col sm:flex-row gap-4'  >
      {/* ------Doctor Detail-------- */}
      <div>
        <img className='bg-green-100 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
      </div>
      <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ' >
        {/* ---DOC INFORMATION----- */}
        <p className='flex item-center gap-2 text-2xl font-medium text-gray-900 '>
          {docInfo.name}
          <img className='w-5' src={assets.verified_icon} alt="" />
        </p>
        <div className='flex item-center gap-2 text-gray-600'>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-05 px-2 border text-xs rounded-full'>{docInfo.experience}</button>

          {/*----doctor's about----- */}
          <div>
            <p className='flex item-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore veniam reprehenderit commodi consequatur fugit facere tenetur, cum ipsam explicabo nihil, sunt, excepturi hic recusandae magnam quaerat officiis? Odit, blanditiis dolores!</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment Fee:{currencySymbol}<span className='text-gray-600'>{docInfo.fees}</span>
          </p>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slot</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length>0 && docSlots.map((item,index)=>{
              <div key={index}>
                <p>{item[0]&& daysOfWeek[item[0],datetime.getDate()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default appointments