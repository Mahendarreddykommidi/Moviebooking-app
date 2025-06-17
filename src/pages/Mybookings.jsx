import React, { useContext, useEffect, useState } from 'react'
import { assets,dummyBookingData } from '../assets/assets';
import Blurcircle from "../components/Blurcircle"
import { dateFormat } from '../lib/dateFormat';
import timeformat from '../lib/timeformat';
const Mybookings = () => {
  const [loading,Setloading]=useState(true);
  const [bookings,Setbookings]=useState([])
  const currency="$"
  
  const getMybookings=async()=>{
    Setbookings(dummyBookingData)
    Setloading(false)


  }


  useEffect(()=>{
    getMybookings()
  },[])
  
  return !loading && (
    <div className=' px-6 md:px-16 lg:px-24 xl:px-44 pt-30 md:pt-50 relative overflow-hidden  min-h-[80vh]'>
  
      <Blurcircle top='100px' left='100px'/>
      <div>
         <Blurcircle top='0px' left='600px'/>

      </div>
          <h1 className=' font-medium text-lg'>My bookings</h1>
          {bookings.map((item,index)=>(
            <div key={index} className='flex flex-col md:flex-row items-center justify-between max-w-3xl rounded-lg mt-4 p-2
            bg-primary/8 border border-primary/20 
            
            '>
              <div className='flex flex-col md:flex-row'>
                <img src={item.show.movie.poster_path} alt=""  className='md:max-w-45 aspect-video h-auto object-cover object-bottom rounded'/>
                <div className='flex flex-col p-4'>
                  <p className='text-lg font-semibold'>{item.show.movie.title}</p>
                  <p className='text-gray-400'>{timeformat(item.show.movie.runtime)}</p>
                  <p className='text-gray-400 text-sm mt-3'>{dateFormat(item.show.showDateTime)}</p>

                </div>

              </div>
              <div className='flex flex-col md:items-end md:text-right justify-between p-4'>
                <div className='flex items-center gap-4'>
                  <p className='text-2xl font-semibold mb-3'>{currency}{item.amount}</p>
                  {!item.isPaid && <button className='bg-primary px-4 py-1.5 text-white rounded-full'>Paynow</button>}

                </div>
                <div className='tex-sm'>
                  <p className='text-sm'> Total tickets:<span className='text-gray-400'>{item.bookedSeats.length}</span></p>
                  <p className='text-sm'>Seat Number <span className='text-gray-400'>{item.bookedSeats.join(", ")}</span></p>

                </div>
                 

              </div>

            </div>
          ))}
    

  
    </div>
    
  )
}

export default Mybookings