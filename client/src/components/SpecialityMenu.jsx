import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
function SpecialityMenu() {
    return (
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w1/3 text-center text-sm'>
                Simple browser through our extensive list of trusted doctors,schedi=ule your appointment hassel-free
            </p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full '>
                {specialityData.map((item,index)=>(
                    <Link key={index} onClick={()=>scrollTo(0,0)}className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] tranasition-all duration-500' to={`/doctor/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2 ' key={index} src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu