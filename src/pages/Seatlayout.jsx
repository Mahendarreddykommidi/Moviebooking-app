import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyDateTimeData, dummyShowsData } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowLeft, ArrowRight, ClockIcon } from "lucide-react";
import isoTimeformat from "../lib/isoformart";
import Blurcircle from "../components/Blurcircle";
import toast from "react-hot-toast";

const Seatlayout = () => {
  const { id, date } = useParams();
  const [selectedSeats, Setselectedseats] = useState([]);
  const [selectedTime, Setselectedtime] = useState(null);
  const [show, Setshow] = useState(null);
  const navigate = useNavigate();

  const getShow = () => {
    const show = dummyShowsData.find((show) => show._id === id);

    if (show) {
      Setshow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  const handleSeatclick = (seatId) => {
    if (!selectedTime) {
      return toast.error("please slect time first");
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast.error("please select seats less than 5");
    }
    Setselectedseats((prev) =>
      prev.includes(seatId) ? prev.filter((seat) => seat !== seatId) : [...prev, seatId]
    );
  };

  const renderseats = (row, count = 9) => {
    return (
      <div key={row} className="flex gap-2 mt-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: count }, (_, i) => {
            const seatId = `${row}${i + 1}`;
            return (
              <button
                onClick={() => handleSeatclick(seatId)}
                key={seatId}
                className={`h-8 w-8 border border-primary/60 cursor-pointer ${
                  selectedSeats.includes(seatId) ? "bg-primary text-white" : ""
                }`}
              >
                {seatId}
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]];

  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      <div className="w-60 bg-primary/10 border border-primary/20 rounde-2xl py-10 h-max md:sticky md:md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>
        <div className="mt-1 space-y-3">
          {show.dateTime[date]?.map((item) => (
            <div
              key={item.time}
              onClick={() => Setselectedtime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? "bg-primary/20 text-white"
                  : "hover:bg-primary/20"
              }`}
            >
              <ClockIcon className="w-4 h-4" />
              <p className="text-sm">{isoTimeformat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 px-5  flex flex-col items-center relative">
        <Blurcircle top="-100px" left="-100px" />
        <Blurcircle bottom="0" right="0" />
        <div className="flex flex-col mt-1 space-y-3">
          <h1 className="text-2xl font-semibold text-center py-5">Select your seat</h1>
          <img src={assets.screenImage} alt="" className=" " />
          <p className="text-center">SCREEN SIDE</p>
          <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2">{groupRows[0]?.map((row) => renderseats(row))}</div>
          </div>
          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group,idx)=>(
              <div key={idx} className="">
                {group.map(row=>renderseats(row))}
              </div>
            ))}

          </div>
        
        </div>
        <div className="flex items-center justify-center mt-30   ">
          <button onClick={()=>navigate("/my-bookings")} className="flex items-center gap-2 px-10 py-3 font-medium rounded-full bg-primary hover:bg-primary-dull transition duration-300">
            Proceed to checkout <span className="flex items-center"><ArrowRight strokeWidth={4} className="w-5"/></span>
          </button>

        </div>

      </div>
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default Seatlayout;
