import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
    return (
        <div className='md:x-10'>
            <div className=' sm:grid grid-cols-4 gap-14 my-10 mt-40 '>
                {/* ------Left Section------ */}
                <div className='col-span-2'>
                    <img className='h-[80px] w-60 mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Serenica, we blend expert medical care with mental wellness, ensuring a holistic approach to health. Our mission is to provide compassionate, accessible, and innovative healthcare solutions. With a focus on healing both body and mind, we strive to be your trusted partner in wellness and recovery.</p>
                </div>
                {/*------Center Section-------*/}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/*-------Right Section-------*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-2562-3223-23</li>
                        <li>Serenica@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* --------Copyright Text----------- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Serenica - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer