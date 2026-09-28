import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Dumbbell,
  Flame,
  Users,
} from "lucide-react";
import "./Schedule.css";

const days = [
  { id: "mon", short: "MON", full: "Monday", date: "01" },
  { id: "tue", short: "TUE", full: "Tuesday", date: "02" },
  { id: "wed", short: "WED", full: "Wednesday", date: "03" },
  { id: "thu", short: "THU", full: "Thursday", date: "04" },
  { id: "fri", short: "FRI", full: "Friday", date: "05" },
  { id: "sat", short: "SAT", full: "Saturday", date: "06" },
];

const classes = {
  mon: [
    {
      id: 1,
      time: "06:30 AM",
      title: "Morning Strength",
      category: "Strength",
      trainer: "Marcus Johnson",
      duration: "60 min",
      spots: "8 spots left",
      icon: Dumbbell,
    },
    {
      id: 2,
      time: "09:00 AM",
      title: "HIIT Burn",
      category: "Cardio",
      trainer: "Daniel Carter",
      duration: "45 min",
      spots: "5 spots left",
      icon: Flame,
    },
    {
      id: 3,
      time: "06:00 PM",
      title: "Total Body",
      category: "Fitness",
      trainer: "Sophia Williams",
      duration: "60 min",
      spots: "12 spots left",
      icon: Dumbbell,
    },
    {
      id: 4,
      time: "07:30 PM",
      title: "Mobility Flow",
      category: "Recovery",
      trainer: "Emma Rodriguez",
      duration: "45 min",
      spots: "15 spots left",
      icon: Users,
    },
  ],
  tue: [
    {
      id: 5,
      time: "07:00 AM",
      title: "Power Training",
      category: "Strength",
      trainer: "Marcus Johnson",
      duration: "60 min",
      spots: "6 spots left",
      icon: Dumbbell,
    },
    {
      id: 6,
      time: "10:00 AM",
      title: "Core & Conditioning",
      category: "Fitness",
      trainer: "Sophia Williams",
      duration: "50 min",
      spots: "10 spots left",
      icon: Flame,
    },
    {
      id: 7,
      time: "05:30 PM",
      title: "Cardio Blast",
      category: "Cardio",
      trainer: "Daniel Carter",
      duration: "45 min",
      spots: "4 spots left",
      icon: Flame,
    },
  ],
  wed: [
    {
      id: 8,
      time: "06:30 AM",
      title: "Strength Fundamentals",
      category: "Strength",
      trainer: "Marcus Johnson",
      duration: "60 min",
      spots: "9 spots left",
      icon: Dumbbell,
    },
    {
      id: 9,
      time: "09:30 AM",
      title: "Lean & Strong",
      category: "Weight Loss",
      trainer: "Sophia Williams",
      duration: "50 min",
      spots: "7 spots left",
      icon: Flame,
    },
    {
      id: 10,
      time: "06:00 PM",
      title: "Athletic Performance",
      category: "Performance",
      trainer: "Daniel Carter",
      duration: "60 min",
      spots: "5 spots left",
      icon: Dumbbell,
    },
    {
      id: 11,
      time: "07:30 PM",
      title: "Recovery & Mobility",
      category: "Recovery",
      trainer: "Emma Rodriguez",
      duration: "45 min",
      spots: "14 spots left",
      icon: Users,
    },
  ],
  thu: [
    {
      id: 12,
      time: "07:00 AM",
      title: "Morning HIIT",
      category: "Cardio",
      trainer: "Daniel Carter",
      duration: "45 min",
      spots: "3 spots left",
      icon: Flame,
    },
    {
      id: 13,
      time: "10:00 AM",
      title: "Full Body Strength",
      category: "Strength",
      trainer: "Marcus Johnson",
      duration: "60 min",
      spots: "8 spots left",
      icon: Dumbbell,
    },
    {
      id: 14,
      time: "06:30 PM",
      title: "Body Transformation",
      category: "Weight Loss",
      trainer: "Sophia Williams",
      duration: "60 min",
      spots: "6 spots left",
      icon: Flame,
    },
  ],
  fri: [
    {
      id: 15,
      time: "06:30 AM",
      title: "Power & Strength",
      category: "Strength",
      trainer: "Marcus Johnson",
      duration: "60 min",
      spots: "7 spots left",
      icon: Dumbbell,
    },
    {
      id: 16,
      time: "09:00 AM",
      title: "Cardio Blast",
      category: "Cardio",
      trainer: "Daniel Carter",
      duration: "45 min",
      spots: "9 spots left",
      icon: Flame,
    },
    {
      id: 17,
      time: "05:30 PM",
      title: "Total Transformation",
      category: "Fitness",
      trainer: "Sophia Williams",
      duration: "60 min",
      spots: "5 spots left",
      icon: Dumbbell,
    },
    {
      id: 18,
      time: "07:30 PM",
      title: "Evening Mobility",
      category: "Recovery",
      trainer: "Emma Rodriguez",
      duration: "45 min",
      spots: "13 spots left",
      icon: Users,
    },
  ],
  sat: [
    {
      id: 19,
      time: "08:00 AM",
      title: "Weekend Warrior",
      category: "Fitness",
      trainer: "Marcus Johnson",
      duration: "75 min",
      spots: "10 spots left",
      icon: Dumbbell,
    },
    {
      id: 20,
      time: "10:00 AM",
      title: "HIIT Challenge",
      category: "Cardio",
      trainer: "Daniel Carter",
      duration: "50 min",
      spots: "4 spots left",
      icon: Flame,
    },
    {
      id: 21,
      time: "12:00 PM",
      title: "Mobility & Recovery",
      category: "Recovery",
      trainer: "Emma Rodriguez",
      duration: "45 min",
      spots: "16 spots left",
      icon: Users,
    },
  ],
};

function Schedule() {
  const [activeDay, setActiveDay] = useState("mon");
  const [bookedClasses, setBookedClasses] = useState([]);

  const selectedDay = days.find((day) => day.id === activeDay);
  const selectedClasses = classes[activeDay];

  const handleBooking = (classId) => {
    setBookedClasses((current) =>
      current.includes(classId)
        ? current.filter((id) => id !== classId)
        : [...current, classId],
    );
  };

  return (
    <section className="schedule section" id="schedule">
      <div className="schedule__container container">
        <div className="schedule__header">
          <div className="schedule__heading">
            <span className="section-label">Weekly Schedule</span>

            <h2 className="section-title">
              TRAIN ON
              <span> YOUR TIME.</span>
            </h2>

            <p className="section-description">
              Find a class that fits your schedule and train with expert coaches
              who keep you motivated and moving forward.
            </p>
          </div>

          <div className="schedule__header-info">
            <CalendarDays size={22} />
            <div>
              <strong>6 Days A Week</strong>
              <span>Morning & evening sessions</span>
            </div>
          </div>
        </div>

        <div
          className="schedule__days"
          role="tablist"
          aria-label="Weekly schedule"
        >
          {days.map((day) => (
            <button
              type="button"
              key={day.id}
              className={`schedule__day ${
                activeDay === day.id ? "schedule__day--active" : ""
              }`}
              onClick={() => setActiveDay(day.id)}
              role="tab"
              aria-selected={activeDay === day.id}
            >
              <span>{day.short}</span>
              <strong>{day.date}</strong>
            </button>
          ))}
        </div>

        <div className="schedule__selected-day">
          <div>
            <span className="section-label">Today's Classes</span>
            <h3>{selectedDay.full}</h3>
          </div>

          <span>{selectedClasses.length} classes available</span>
        </div>

        <div className="schedule__list">
          {selectedClasses.map((gymClass) => {
            const Icon = gymClass.icon;
            const isBooked = bookedClasses.includes(gymClass.id);

            return (
              <article
                className={`class-card ${isBooked ? "class-card--booked" : ""}`}
                key={gymClass.id}
              >
                <div className="class-card__time">
                  <Clock3 size={17} />
                  <strong>{gymClass.time}</strong>
                </div>

                <div className="class-card__icon">
                  <Icon size={24} />
                </div>

                <div className="class-card__main">
                  <div className="class-card__title-row">
                    <h4>{gymClass.title}</h4>
                    <span>{gymClass.category}</span>
                  </div>

                  <div className="class-card__details">
                    <span>
                      <Users size={14} />
                      {gymClass.trainer}
                    </span>

                    <span>
                      <Clock3 size={14} />
                      {gymClass.duration}
                    </span>

                    <span className="class-card__spots">{gymClass.spots}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className={`class-card__button ${
                    isBooked ? "class-card__button--booked" : ""
                  }`}
                  onClick={() => handleBooking(gymClass.id)}
                >
                  {isBooked ? "Booked" : "Book Class"}
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>

        <div className="schedule__note">
          <strong>Need a personal session?</strong>
          <span>Personal training is available throughout the week.</span>
          <a href="#contact">
            Contact a Trainer
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
