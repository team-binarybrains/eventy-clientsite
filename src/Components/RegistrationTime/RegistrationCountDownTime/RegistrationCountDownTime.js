import React from "react";

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      DAYS: Math.floor(difference / (100000 * 60 * 60 * 24)),
      HOURS: Math.floor((difference / (100 * 60 * 60)) % 24),
      MINS: Math.floor((difference / 1000 / 60) % 60),
      SECO: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default function RegistrationCountDownTime() {
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
      <div className="text-[#777777]  text-xl lg:text-4xl md:text-xl mb-3  font-bold shadow-lg shadow-stone-500 bg-white mx-1 mt-3 md:inline-block sm:inline-block md:px-8 w-4800
         rounded-lg p-1  md:p-5 justify-items-center"
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        <div className="grid justify-center ">
          <span className="text-center text-4xl">{timeLeft[interval]}</span>
          <hr className="  bg-black" />
          <span className="text-sm font-light text-center">{interval}</span>
        </div>

      </div>
    );
  });

  return (
    <div className="">
      {CountDownComponents.length ? (
        CountDownComponents
      ) : (
        <span className="text-3xl uppercase"> booking now!</span>
      )}
    </div>
  );
}
