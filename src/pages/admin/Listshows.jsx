import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Title from "../../components/admin/Title";
import dateFormat from "../../lib/dateFormat";

const Listshows = () => {
  const currency = "$";
  const [shows, Setshows] = useState([]);
  const [loading, Setloading] = useState(true);

  const getallShows = async () => {
    try {
      Setshows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2025-06-30T02:30:00.000Z",
          showPrice: 59,
          occupiedSeats: {
            Al: "User_1",
            B1: "User_2",
            C1: "User_3",
          },
        },
      ]);
      Setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getallShows()
  },[])

  return (
    <>
    <Title text1="List" text2="Shows"/>
     <div className="max-w-4xl mt-6 overlow-x-auto">
      <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
        <thead>
          <tr className="bg-primary/20 text-left text-white">
            <th className="p-2 font-medium pl-5">Movie name</th>
             <th className="p-2 font-medium ">Show time</th>
              <th className="p-2 font-medium ">Total bookings</th>
               <th className="p-2 font-medium ">Earnings</th>
          </tr>
        </thead>    
        <tbody className="text-sm font-light">
          {shows.map((show,index)=>(
            <tr key={index} className="border border-primary/10 bg-primary/5 even:bg-primary/10">
              <td className="min-w-45 p-2 pl-5">{show.movie.title}</td>
              <td className="p-2">{dateFormat(show.showDateTime)}</td>
              <td className="p-2 pl-6">{Object.keys(show.occupiedSeats).length}</td>
              <td className="p-2">{currency}{Object.keys(show.occupiedSeats).length*show.showPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

     </div>

    </>
  )
};

export default Listshows;
