import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-datepicker/dist/react-datepicker.css";
import "../index.css";

import TimeOffModal from "./calendar-modal";

function Scheduler(props) {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetch("https://63545c47ccce2f8c0207b3d7.mockapi.io/api/v1/calendar-data")
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setAllEvents(data);
      })
      .catch((err) => {
        // auto catches network / connection error
        console.log("error");
      });
  }, []);

  return (
    <div className="Calendar">
      <h1 className="page-title text-purple-700">Time Off Calendar</h1>
      <TimeOffModal />
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default Scheduler;
