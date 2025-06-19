import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { dummyBookingData } from "../../assets/assets";
import dateFormat from "../../lib/dateFormat";

const Listbookings = () => {
  const currency = "$";
  const [bookings, Setbookings] = useState([]);
  const [loading, Setloading] = useState(true);

  const getAllbookings = async () => {
    Setbookings(dummyBookingData);
    Setloading(false);
  };

  useEffect(() => {
    getAllbookings();
  }, []);
  return !loading ? (
    <div>
      <Title text1="List" text2="Bookings" />
      <div className="max-w-4xl mt-6 overlow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">User name</th>
              <th className="p-2 font-medium ">Movie name</th>
              <th className="p-2 font-medium ">Shows</th>
              <th className="p-2 font-medium ">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>
             <tbody className="text-sm font-light">
                    {bookings.map((item,index)=>(
                      <tr key={index} className="border border-primary/10 bg-primary/5 even:bg-primary/10">
                        <td className="min-w-45 p-2 pl-5">{item.user.name}</td>
                        <td className="p-2">{item.show.movie.title}</td>
                        <td className="p-2 pl-6">{dateFormat(item.show.showDateTime)}</td>
                        <td className="p-2">
                          {Object.values(item.bookedSeats)
                            .flat()
                            .join(", ")}
                        </td>
                        <td className="p-2">{currency}{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Listbookings;
