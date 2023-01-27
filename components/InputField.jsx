import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { getIpInfo } from 'utils/api'

const InputField = ({ ipAddress, setIpAddress, setIpInfo }) => {

    const handleChange = (e) => {
        setIpAddress(e.target.value)
    }

    const handleClick = async () => {
        const ipInfo = await getIpInfo(ipAddress)
        setIpInfo(ipInfo)
    }

    return (
        <div className='mt-8 flex'>
            <input type="text" placeholder='Search for any IP address or domain' className='w-[326px] h-[60px] rounded-l-2xl px-6 outline-none' onChange={handleChange} />
            <button className='bg-black p-[18px] border border-black rounded-r-2xl' onClick={handleClick}><IoIosArrowForward className='text-white text-xl' /></button>
        </div>
    )
}

export default InputField