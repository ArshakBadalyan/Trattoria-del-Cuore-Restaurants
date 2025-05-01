import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUtensils,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { reservation } from "../utils/content";

const Reservation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reservationData = Object.fromEntries(formData.entries());
    console.log("Reservation submitted:", reservationData);
    alert(`Thank you! Your reservation details have been logged.`);
    // In a real application, you would send this data to a server.
  };

  const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format

  return (
    <section id="reservation" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-100">
              {reservation.reservation}
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-6 dark:bg-red-500"></div>
            <p className="text-gray-600 mb-8 dark:text-gray-300">
              {reservation.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4 dark:bg-red-900">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-red-600 dark:text-red-400"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 dark:text-gray-100">
                    {reservation.hours}
                  </h4>
                  {reservation.opening.map((item)=>(
                      <p className="text-gray-600 dark:text-gray-300"> {item}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4 dark:bg-red-900">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="text-red-600 dark:text-red-400"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 dark:text-gray-100">
                    {reservation.dining}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {reservation.notify}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4 dark:bg-red-900">
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="text-red-600 dark:text-red-400"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 dark:text-gray-100">
                    {reservation.cancellation}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {reservation.notify}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="reservation-form p-8 rounded-lg shadow-md bg-white/90 backdrop-blur-md dark:bg-gray-800/90 dark:text-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 dark:text-gray-100">
                {reservation.bookTable}
              </h3>
              <form id="reservationForm" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-gray-700 font-medium mb-2 dark:text-gray-300"
                    >
                      {reservation.name}
                    </label>
                    <input
                      type="text"
                      id="res-name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-red-500 dark:focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="res-email"
                      className="block text-gray-700 font-medium mb-2 dark:text-gray-300"
                    >
                      {reservation.email}
                    </label>
                    <input
                      type="email"
                      id="res-email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-red-500 dark:focus:border-red-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-gray-700 font-medium mb-2 dark:text-gray-300"
                    >
                      {reservation.phone}
                    </label>
                    <input
                      type="tel"
                      id="res-phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-red-500 dark:focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-gray-700 font-medium mb-2 dark:text-gray-300"
                    >
                      {reservation.guests}
                    </label>
                    <select
                      id="res-guests"
                      name="guests"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-red-500 dark:focus:border-red-500"
                    >
                      {reservation.people.map((item) => (<option value={item.key}>{item.label}</option>))}
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-gray-700 font-medium mb-2 dark:text-gray-300"
                    >
                      {reservation.date}
                    </label>
                    <input
                      type="date"
                      id="res-date"
                      name="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-red-500 dark:focus:border-red-500"
                      required
                      min={today}
                      defaultValue={today}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-gray-700 font-medium mb-2 dark:text-gray-300"
                    >
                      {reservation.time}
                    </label>
                    <select
                      id="res-time"
                      name="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-red-500 dark:focus:border-red-500"
                    >
                        {reservation.timetable.map((item)=>(<option value={item.key}>{item.key}</option>))}
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="res-notes"
                    className="block text-gray-700 font-medium mb-2 dark:text-gray-300"
                  >
                    {reservation.special}
                  </label>
                  <textarea
                    id="res-notes"
                    name="notes"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-red-500 dark:focus:border-red-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 dark:bg-red-500 dark:hover:bg-red-600"
                >
                  {reservation.confirm}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
