import React from 'react'
import { dummyShowsData } from '../assets/assets'
import Moviecard from '../components/Moviecard'
import Blurcircle from '../components/Blurcircle'
const Movies = () => {
  return dummyShowsData.length>0 ? (
    <div className='px-6 md:px-16 lg:px-40 xl:px-44 my-40 mb-60 relative overflow-hidden mx-auto'>
      <h1 className='text-lg font-semibold'>Now showing</h1>
      <Blurcircle top='150px' left='0px'/>
         <Blurcircle bottom='50px' right='50px'/>
      
          <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
              {dummyShowsData.map((show)=>(
                <Moviecard movie={show} key={show._id}/>
              ))}
            </div>
      
       
    </div>
  ): <div>
     <h1>movies not found</h1>
  </div>
}

export default Movies