"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Clock, Globe, Video, X } from "lucide-react"

const BookNow = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedDuration, setSelectedDuration] = useState("30m")
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8)) // September 2025
  const [timeFormat, setTimeFormat] = useState("24h")

  const durations = ["10m", "30m", "45m", "1h"]
  const timeSlots = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:30", "21:00", "21:30", "22:00", "22:30"]

  const minDate = new Date(2025, 8, 1) // September 1, 2025

  const formatTime = (time) => {
    if (timeFormat === "12h") {
      const [hours, minutes] = time.split(":")
      const hour = Number.parseInt(hours)
      const ampm = hour >= 12 ? "PM" : "AM"
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
      return `${displayHour}:${minutes} ${ampm}`
    }
    return time
  }

  const isPastDate = (day) => {
    const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return dateToCheck < minDate
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null)
    for (let day = 1; day <= daysInMonth; day++) days.push(day)
    return days
  }

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate >= minDate ? newDate : prev
    })
    setSelectedDate(null)
  }

  const selectDate = (day) => {
    if (day && !isPastDate(day)) {
      setSelectedDate(day)
      setSelectedTime(null)
    }
  }

  const getDayName = (day) => {
    if (!day) return ""
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return dayNames[date.getDay()]
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  // Effect to disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    // Cleanup on unmount or when modal closes
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Close Button at Top-Right of Screen */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 hover:bg-gray-700 rounded-full transition-colors"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Black Blur Backdrop */}
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-black text-white rounded-lg shadow-2xl w-[1080px] h-[500px] overflow-hidden">
        <div className="flex h-full">
          {/* Left Panel - Meeting Info */}
          <div className="w-[300px] bg-black p-6 border-r border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TG</span>
              </div>
              <span className="text-gray-300">tejas gk</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-[white]">Discovery Call</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              A 15-30 minute discovery call to understand your business needs, challenges, and goals. We'll discuss how
              our solutions can support your vision, explore potential collaboration opportunities, and outline the next
              steps. Ideal for business owners,
            </p>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Duration</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {durations.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`px-3 py-1 rounded text-sm border ${
                      selectedDuration === duration
                        ? "bg-white text-gray-900 border-white"
                        : "bg-gray-700 text-gray-300 border-gray-600 hover:border-gray-500"
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Video className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Google Meet</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">Asia/Kolkata</span>
            </div>
          </div>

          {/* Middle Panel - Calendar */}
          <div className="flex-1 p-6">
            <div className="max-w-full mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[white]">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigateMonth(-1)}
                    disabled={currentMonth <= minDate}
                    className={`p-2 rounded ${currentMonth > minDate ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"}`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-700 rounded">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-sm text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {getDaysInMonth(currentMonth).map((day, index) => (
                  <button
                    key={index}
                    onClick={() => selectDate(day)}
                    disabled={!day || isPastDate(day)}
                    className={`aspect-square flex items-center justify-center text-xl rounded-lg p-3 ${
                      !day
                        ? "invisible"
                        : isPastDate(day)
                          ? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50"
                          : day === selectedDate
                            ? "bg-white text-gray-900"
                            : day === new Date(2025, 8, 9).getDate() && currentMonth.toDateString() === new Date(2025, 8, 9).toDateString()
                              ? "bg-gray-600 text-white"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Time Slots */}
          <div className="w-[300px] bg-black p-6 border-l border-gray-700 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">
                {selectedDate ? `${getDayName(selectedDate)} ${selectedDate.toString().padStart(2, '0')}` : "Select a date"}
              </span>
              <div className="flex bg-black rounded">
                <button
                  onClick={() => setTimeFormat("12h")}
                  className={`px-3 py-1 text-sm rounded-l ${timeFormat === "12h" ? "bg-gray-600" : "hover:bg-gray-600"}`}
                >
                  12h
                </button>
                <button
                  onClick={() => setTimeFormat("24h")}
                  className={`px-3 py-1 text-sm rounded-r ${timeFormat === "24h" ? "bg-gray-600" : "hover:bg-gray-600"}`}
                >
                  24h
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {selectedDate ? (
                <div className="space-y-1">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full p-2 text-sm rounded border ${
                        selectedTime === time
                          ? "bg-white text-black border-white"
                          : "bg-black text-gray-300 border-gray-600 hover:border-gray-500"
                      }`}
                    >
                      {formatTime(time)}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 flex-1 flex items-center justify-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Please select a date to view available times</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookNow