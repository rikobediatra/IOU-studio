"use client";

import { useState, useEffect } from "react";
import { Square } from "phosphor-react"

export default function LocalInfo() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [gmt, setGmt] = useState("");

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locale = navigator.language;

    const city = timeZone.split("/")[1]?.replace("_", " ");
    const country = "Indonesia";

    const updateClock = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: '2-digit',
        hour12: false
      });

      const offset = -now.getTimezoneOffset() / 60;
      const gmtString = `GMT${offset >= 0 ? "+" : ""}${offset}`;

      setLocation(`${city}, ${country}`);
      setTime(formattedTime);
      setGmt(gmtString);
    };

    updateClock();
    const interval = setInterval(updateClock, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-background flex items-center gap-4 text-[1rem] font-light tracking-[-2%]">
      <span className="opacity-60 hover:opacity-100">{location}</span>
      <span className="opacity-60 hover:opacity-100 bg-foreground">
        <Square width={4} height={4} color="#EBEBEB"/>
      </span>
      <span>
        {time} {gmt}
      </span>
    </div>
  );
}
