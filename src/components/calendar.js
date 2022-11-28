import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../index.css";
import Modal from "react-bootstrap/Modal";

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

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);

  //Modal Variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //display dates on calendar UI
  function displayOnCalendar() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
    }

    setAllEvents([...allEvents, newEvent]);
    /*
    fetch("https://63545c47ccce2f8c0207b3d7.mockapi.io/api/v1/calendar-data")
      .then((data) => {
        setAllEvents(data);
      })
      .catch((err) => {
        // auto catches network / connection error
        console.log("error");
      });
*/
  }

  return (
    <div className="Calendar">
      <h1 className="page-title text-purple-700">Time Off Calendar</h1>
      <div className="center">
        <button
          onClick={handleShow}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Add Time Off
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-purple-200" closeButton>
          <Modal.Title className="text-purple-500">Add Time Off</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-purple-100 rounded">
          <form
            onSubmit={(e) => {
              handleClose();
              e.preventDefault();

              displayOnCalendar();

              fetch(
                "https://63545c47ccce2f8c0207b3d7.mockapi.io/api/v1/calendar-data",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(newEvent),
                }
              ).then(() => {
                console.log("new employee added");
              });
            }}
          >
            <div class="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Employee Name"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </div>
            <div class="mb-2">
              <DatePicker
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
            </div>
            <div class="mb-2">
              <DatePicker
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
            </div>
            <button
              className="px-4 py-1 text-sm bg-purple-400 text-purple-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              style={{ marginTop: "10px" }}
              type="submit"
            >
              Add
            </button>
          </form>
        </Modal.Body>
      </Modal>
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
