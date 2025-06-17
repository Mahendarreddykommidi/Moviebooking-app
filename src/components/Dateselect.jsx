import React, { useState } from "react";
import Blurcircle from "./Blurcircle";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dateselect = ({ dateTime, id }) => {
  const [selected, Setselected] = useState(null);
  const navigate = useNavigate();
  const onBookhandler = () => {
    if (!selected) {
      return toast("please select a date");
    }
    navigate(`/movies/${id}/${selected}`)
    scrollTo(0,0);
  };
  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border rounded-md border-primary/20">
        <Blurcircle top="-100px" left="-100px" />
        <Blurcircle top="100px" left="0px" />
        <div>
          <p className="text-lg font-semibold">Choose date</p>
          <div className="flex items-center gap-6 text-sm mt-5">
            <ChevronLeftIcon width={28} />
            <span className="grid grid-cols-3 md:flex-row md:flex flex-wrap md:max-w-lg gap-4">
              {Object.keys(dateTime).map((date) => (
                <button
                  onClick={() => Setselected(date)}
                  key={date}
                  className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded-md ${
                    selected === date
                      ? "bg-primary text-white"
                      : " border border-primary/20 text-white"
                  }`}
                >
                  <span>{new Date(date).getDate()}</span>
                  <span>
                    {new Date(date).toLocaleDateString("en-Us", {
                      month: "short",
                    })}
                  </span>
                </button>
              ))}
            </span>
            <ChevronRightIcon width={28} />
          </div>
        </div>
        <button onClick={onBookhandler} className="px-10 py-3 bg-primary rounded-md text-white">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Dateselect;
