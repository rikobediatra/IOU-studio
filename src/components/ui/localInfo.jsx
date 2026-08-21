"use client";

import { useState, useEffect } from "react";

export default function LocalInfo({ textColor, bgColor }) {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [gmt, setGmt] = useState("");
  const squareColor = bgColor === "bg-foreground" ? "#EBEBEB" : "#181818";

  useEffect(() => {
    const targetTimeZone = "Asia/Jakarta"; 
    
    const city = "Surabaya";
    const country = "Indonesia";

    const updateClock = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("id-ID", {
        timeZone: targetTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const timeZoneOffset = new Intl.DateTimeFormat("en-US", {
        timeZone: targetTimeZone,
        timeZoneName: "shortOffset",
      })
        .formatToParts(now)
        .find((part) => part.type === "timeZoneName")?.value || "GMT+7";

      setLocation(`${city}, ${country}`);
      setTime(formattedTime.replace(/\./g, ":"));
      setGmt(timeZoneOffset);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${textColor} flex items-center gap-4 text-[1rem] font-light tracking-[-2%]`}>
      <span className="opacity-60 hover:opacity-100">{location}</span>
      <span className="inline-flex items-center justify-center opacity-80 transition-opacity hover:opacity-100">
        <span
          className="block h-2 w-2 rounded-[2px]"
          style={{
            backgroundColor: squareColor,
          }}
        />
      </span>
      <span>
        {time} {gmt}
      </span>
    </div>
  );
}