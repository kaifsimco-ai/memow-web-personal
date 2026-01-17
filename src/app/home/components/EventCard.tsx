import ButtonIC from '@/components/Buttons/ButtonIC'
import ChipIc from '@/components/chip/ChipIc'
import Image from 'next/image'
import React from 'react'

const EventCard = () => {
    return (
        <div className='bg-[#ECE7D8] p-2 rounded-2xl relative'>
            <div>
                <ChipIc label={"Trending"} icon={'/images/homepage/flash.svg'} className='flex flex-row  bg-gold absolute top-4 left-4' size='sm'  iconClassName='w-[9px] h-[12px]' labelClassName='text-black' />
                <Image alt='naamkaran-event' src={'/images/homepage/naamKaran_home.jpg'} height={226} width={341} className="rounded-xl shadow-lg" />

            </div>
            <div className='flex flex-row justify-between items-center mt-2'>
                  <div className='flex flex-col   md:w-[213px] '>
                <p className='font-medium text-[15px] leading-5'>NaamKaran (Naming Cermony)</p>
                <p className='text-[11px] leading-normal text-grayShade2'>A Hindu ritual held to name newborn baby. </p>
                </div>
                <div>
                <ButtonIC label='Book Now'
                className={'border-2 border-border-60 bg-skin px-2 py-1'}
                labelStyle={' text-[12px]'} />
                </div>
            </div>


        </div>
    )
}

export default EventCard 