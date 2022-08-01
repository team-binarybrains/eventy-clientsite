import React from "react";

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      DAYS: Math.floor(difference / (10000 * 60 * 60 * 24)),
      HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
      MINS: Math.floor((difference / 1000 / 60) % 60),
      SECO: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default function CountDown() {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const CountDownComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    return (
      <div className="text-[#777777] mb-3 font-bold border-2 border-[#777777] w-[80px] h-[80px] mx-1 mt-3 md:inline-block  rounded-lg md:px-3 py-2 justify-items-center justify-center">

        <div className="grid justify-center ">
        <span className="text-center text-4xl">{timeLeft[interval]}</span>
        <span className="text-sm font-light text-center">{interval}</span>
        </div>

      </div>
    );
  });

  return (
    <div className="mt-6">
      {CountDownComponents.length ? (                                                                              
        CountDownComponents
      ) : (
        <span className="text-3xl uppercase"> next event is comming soon!</span>
      )}
    </div>
  );
}
