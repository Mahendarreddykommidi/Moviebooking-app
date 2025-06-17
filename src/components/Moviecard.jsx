import { Star, StarHalf } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeformat from '../lib/timeformat'


const Moviecard = ({movie}) => {
  const navigate=useNavigate()
  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl
     w-66 hover:translate-y-1
     transition duration-300'>
      <img onClick={()=>{navigate(`/movies/${movie._id}`);scrollTo(0,0)}}  src={movie.backdrop_path} className='w-full h-52'/>
      <p className='font-semibold mt-2 truncate'>{movie.title}</p>
      <div className='flex items-center gap-2'> 
      <p className='text-sm text-gray-400 mt-2 flex gap-3'>
        {new Date(movie.release_date).getFullYear()}.{movie.genres.slice(0,2).map((genre=>genre.name)).join("|")}.
        {timeformat(movie.runtime)}

      </p>
      </div>
      <div className="flex items-center justify-between mt-4 pb-3">
        <button  onClick={()=>{navigate(`/movies/${movie._id}`);scrollTo(0,0)}}  className='px-4 py-2 bg-primary hover:bg-primary-dull rounded-full transition duration-300'>Book now</button>
         <div className='flex items-center gap-2'>
            <Star className='w-3.5 fill-primary'/>
        <p>{movie.vote_average.toFixed(1)}</p>
         </div>

      </div>

    </div>
  )
}

export default Moviecard
