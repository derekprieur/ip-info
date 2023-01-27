import React from 'react'

const InfoCard = ({ ipInfo }) => {
    return (
        <div className='absolute bottom-[-147px] lg:bottom-[-80px] bg-white h-[294px] w-[328px] lg:h-[160px] lg:w-[1110px] flex justify-center lg:gap-4 lg:items-center text-[#2c2c2c] rounded-lg'>
            <div className='flex flex-col lg:flex-row lg:w-full lg:justify-around lg:text-left'>
                <div className='mt-6 flex flex-col flex-1 lg:items-center lg:border-r'>
                    <p className='font-bold text-xs text-gray-500'>IP ADDRESS</p>
                    <p className='text-xl'>{ipInfo?.ip || '192.212.174.101'}</p>
                </div>
                <div className='mt-6  flex flex-col flex-1 lg:items-center lg:border-r'>
                    <p className='font-bold text-xs text-gray-500'>Location</p>
                    <p className='text-xl'>{ipInfo?.location?.region || 'New York'}</p>
                </div>
                <div className='mt-6 flex flex-col flex-1 lg:items-center lg:border-r'>
                    <p className='font-bold text-xs text-gray-500'>TIMEZONE</p>
                    <p className='text-xl'>UTC{ipInfo?.location?.timezone || '-05:00'}</p>
                </div>
                <div className='mt-6 flex flex-col flex-1 lg:items-center lg:border-r'>
                    <p className='font-bold text-xs text-gray-500'>ISP</p>
                    <p className='text-xl'>{ipInfo?.isp || 'SpaceX Starlink'}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard