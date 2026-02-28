"use client";

import { useState, useEffect } from "react";

export default function LocalInfo() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [gmt, setGmt] = useState("");

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locale = navigator.language;

    const city = timeZone.split("/")[1]?.replace("_", " ");

    const regionCode = locale.split("-")[1];
    const regionNames = new Intl.DisplayNames([locale], { type: "region" });
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
    <div className="text-background flex items-center gap-4 tracking-wide">
      <span className="opacity-60 hover:opacity-100">{location}</span>
      <span className="opacity-60 hover:opacity-100">•</span>
      <span>
        {time} {gmt}
      </span>
    </div>
  );
}
