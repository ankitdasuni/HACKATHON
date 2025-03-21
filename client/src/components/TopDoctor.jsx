import React, { useContext } from 'react'
// import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContex'

function TopDoctor() {
    const navigate = useNavigate()
    const {doctors} =useContext(AppContext) 
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctor to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted Doctors</p>
            <div className='grid grid-cols-4 sm:px-0 gap-3 gap-y-6 mt-2 mb-2'>
                {doctors.slice(0,9).map((item,index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-green-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] tansition-all duration-500' key={index}>
                        <img className='bg-green-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-blue-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                        </div>
                        <p className='flex  justify-center  gap-2 text-md text-center '>{item.name}</p>
                        <p className='flex justify-center text-gray-500 gap-2 text-sm text-center pb-5'>{item.speciality}</p>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate('/doctor');scrollTo(0,0)}} className='flex items-center gap-2 bg-green-200 px-8 py-3 rounded-full text-grar-600 m-auto md: m-0 hover:scale-105 transition-all duration-300' >More</button>
        </div>
    )
}

export default TopDoctor