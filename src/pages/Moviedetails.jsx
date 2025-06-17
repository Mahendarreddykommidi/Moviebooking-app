import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Blurcircle from '../components/Blurcircle';
import { Heart,  PlayCircleIcon, StarIcon } from 'lucide-react';
import timeformat from '../lib/timeformat';
import Moviecard from '../components/Moviecard';
import Dateselect from '../components/Dateselect';
import Loading from '../components/Loading';

const Moviedetails = () => {
  const {id}=useParams();
  console.log(id)
  
  const [show,Setshow]=useState(null)

  const getShow=()=>{
    const foundShow = dummyShowsData.find(show => show._id === id);
  
      Setshow({
        movie: foundShow,
        dateTime: dummyDateTimeData,
      });
   
  }
  useEffect(()=>{
    getShow()
  },[id])
 if (!show || !show.movie) { return <div><Loading/></div>; }
  return  (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img src={show.movie.poster_path} alt="" className='h-104 max-md:mx-auto max-w-70 rounded-xl object-cover' />
        <div className='relative flex flex-col gap-3'>
          <Blurcircle top="-100px" left='-100px'/>
          <p className='text-primary'>English</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance '>{show.movie.title}</h1>
          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary'/>
            {show.movie.vote_average.toFixed(1)} User rating

          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>
          <p className='font-semibold'>
            {timeformat(show.movie.runtime)}.{show.movie.genres.map(genre=>genre.name).join(",") }
            .{show.movie.release_date.split("-")[0]}
          </p>
          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center gap-2 px-7 py-2 rounded-md cursor-pointer bg-gray-800 hover:bg-gray-900 hover:scale-90'>
              <PlayCircleIcon className='w-5 h-5'/>
              Watch trailer
            </button>
            <a href="#dateSelect" className='bg-primary font-medium rounded-md px-10 py-2 hover:bg-primary-dull'>
              Buy tickets
            </a>
            <button className='p-2.5  bg-gray-700 rounded-full transition cursor-pointer active:scale-95 '>
              <Heart className='active:fill-primary transition duration-500'/>

            </button>

          </div>

        </div>
    
      </div>
      <p className='mt-20 text-lg font-medium'>Your Favourite cast</p>
          <div className='overflow-x-auto no-scrollbar mt-8 pb-4 '>
            <div className="flex items-center gap-4">
              {show.movie.casts.slice(0,12).map((cast,index)=>(
                <div key={index} className='flex flex-col items-center text-center'>
                  <img src={cast.profile_path} alt="" className='rounded-full h-20 aspect-square object-cover' />
                  <p className='text-sm mt-3'>{cast.name}</p>

                </div>
              ))}


            </div>
          
           

        </div>
        <div>
            <Dateselect dateTime={show.dateTime} id={id}/>
        </div>
        <div className='mt-30'>
             <p className='text-lg font-semibold'>You May Also Like</p>
              <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
              {dummyShowsData.slice(2,6).map((show)=>(
                <Moviecard movie={show} key={show._id}/>
              ))}
            </div>


        </div>
             <div className='flex justify-center mt-15'>
                <button onClick={()=>{navigate("/movies");scrollTo(0,0)}} className='px-10 py-3 bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>Show more</button>

            </div>
     
    </div>
  )
}


export default Moviedetails