import React, { useEffect, useState } from "react";
import Title from "../../components/admin/Title";
import axios from "axios";
import { dummyShowsData } from "../../assets/assets";
import { CheckIcon, StarIcon } from "lucide-react";
import kconverter from "../../lib/Kconverter";
import Loading from "../../components/Loading"

const Addshows = () => {
  const [nowPlayingmovies, Setnowplayingmovies] = useState([]);
  const [selectedMovie, Setselectedmovie] = useState(null);
  const [dateTimeselection, SetdateTimeSelection] = useState({});
  const [dateTimeinput, setDateTimeinput] = useState("");
  const [Showprice, Setshowprice] = useState("");
  const currency="$"

  const fetchNowPlayingMovies = async () => {
    Setnowplayingmovies(dummyShowsData);
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
  const handleDateTimeAdd=()=>{
    if(!dateTimeinput) return;
    const {date,time}=dateTimeinput.split("T")
    if(!date || !time) return

    SetdateTimeSelection((prev)=>{
      const times=prev[date] || []
      if(!times.includes(time)){
        return {...prev,[date]:[...times,time]}
      }
      return prev
    })

  }
    const handleRemoveTime=()=>{
      SetdateTimeSelection((prev)=>{
        const filteredTimes=prev[date].filter((t)=>t!==time);
        if(filteredTimes.length===0){
          const {[date]:_,...rest}=prev
          return rest
        }
      })
      return {
        ...prev,
        [date]:filteredTimes
      }

    

  }


  return nowPlayingmovies.length > 0 ? (
    <div className="">
      <Title text1="Add" text2="Shows" />

      <h1 className="font-semibold">Now playing movies</h1>
      <div className="overflow-x-auto pb-4">
        <div className=" group flex flex-wrap gap-4 mt-4 w-max ">
          {nowPlayingmovies.map((movie) => (
            <div
              key={movie._id}
              className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:translate y-1 transition duration-300`}
              onClick={()=>Setselectedmovie(movie._id)}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt=""
                  className=" w-full object-cover brightness-90"
                />
                <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0 ">
                  <p className="flex items-center gap-1 text-gray-400">
                    <StarIcon className="w-4 h-4 text-primary fill-primary "></StarIcon>
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p>{kconverter(movie.vote_count)}votes</p>
                </div>
                {selectedMovie ===movie._id &&(
                  <div className="absolute top-2 right-2 flex items-center justify-center bg-primary h-6 w-6 rounded">
                    <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5}/>

                  </div>

                )


                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show price</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input onChange={()=>Setshowprice(e.target.value)} type="number" min={0} value={Showprice} placeholder="enter show price" className="outline-npne" />
        </div>

      </div>
           <div className="mt-6">
        <label className="block text-sm font-medium mb-2">Select date and Time</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>
          <input onChange={()=>setDateTimeinput(e.target.value)} type="datetime-local" value={dateTimeinput}  placeholder="" className="outline-npne" />
          <button className="bg-primary/80 text-white px-3 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer">
          Add time
          </button>
          
        </div>
 

      </div>

    </div>
  ) : (
    <Loading />
  );
};

export default Addshows;
