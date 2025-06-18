import { Star } from "lucide-react"
import { dummyShowsData } from "../assets/assets"
import Moviecard from "../components/Moviecard"
import Blurcircle from "../components/Blurcircle"


const Favorite = () => {
  return (
    <div className='px-6 md:px-6 lg:px-24 overflow-x-hidden min-h-[80vh] my-40 mb-60 relative '>
      <Blurcircle top="150px " left="0px"/>
       <Blurcircle bottom="50px " right="50px"/>



      
        <h1 className='text-2xl font-semibold flex items-center gap-2'>Your favourites <span><Star/></span></h1>
    


        <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
              {dummyShowsData.map((show)=>(
                <Moviecard movie={show} key={show._id}/>
              ))}
            </div>


    </div>
  )
}

export default Favorite