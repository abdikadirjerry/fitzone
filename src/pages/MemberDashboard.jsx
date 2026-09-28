import {
  CalendarDays,
  ChevronRight,
  Clock3,
  Dumbbell,
  LogOut,
  Target,
  Trophy,
  UserRound,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./MemberDashboard.css";

const upcomingClasses = [
  {
    time: "06:30 AM",
    title: "Strength & Power",
    trainer: "Marcus Johnson",
    duration: "60 min",
    type: "Strength",
  },
  {
    time: "05:30 PM",
    title: "HIIT Burn",
    trainer: "Sophia Williams",
    duration: "45 min",
    type: "Cardio",
  },
  {
    time: "07:00 PM",
    title: "Mobility & Recovery",
    trainer: "Emma Rodriguez",
    duration: "50 min",
    type: "Wellness",
  },
];

const stats = [
  {
    label: "Workouts",
    value: "24",
    detail: "This month",
    icon: Dumbbell,
  },
  {
    label: "Attendance",
    value: "92%",
    detail: "Consistency",
    icon: CalendarDays,
  },
  {
    label: "Goals",
    value: "7/10",
    detail: "Completed",
    icon: Target,
  },
  {
    label: "Achievements",
    value: "12",
    detail: "Unlocked",
    icon: Trophy,
  },
];

function MemberDashboard() {
  const { user, logout } = useAuth();

  const firstName = user?.name?.split(" ")[0] || "Member";

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="member-dashboard">
      <div className="member-dashboard__container container">
        <header className="member-dashboard__header">
          <div>
            <span className="section-label">Member Dashboard</span>

            <h1>
              HELLO, <span>{firstName.toUpperCase()}.</span>
            </h1>

            <p>
              Keep showing up. Your consistency is building something stronger
              every day.
            </p>
          </div>

          <button
            type="button"
            className="member-dashboard__logout"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            <span>Sign Out</span>
          </button>
        </header>

        <section className="member-dashboard__membership">
          <div className="member-dashboard__membership-info">
            <div className="member-dashboard__plan-icon">
              <Dumbbell size={25} />
            </div>

            <div>
              <span>Current Membership</span>
              <h2>Performance Plan</h2>
              <p>Active · Renews monthly</p>
            </div>
          </div>

          <div className="member-dashboard__membership-actions">
            <div>
              <span>Next Billing</span>
              <strong>$69.00</strong>
            </div>

            <button type="button">
              Manage Plan
              <ChevronRight size={17} />
            </button>
          </div>
        </section>

        <section className="member-dashboard__stats">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article className="member-dashboard__stat" key={stat.label}>
                <div className="member-dashboard__stat-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <small>{stat.detail}</small>
                </div>
              </article>
            );
          })}
        </section>

        <div className="member-dashboard__grid">
          <section className="member-dashboard__classes">
            <div className="member-dashboard__section-header">
              <div>
                <span className="section-label">Your Schedule</span>
                <h2>UPCOMING CLASSES</h2>
              </div>

              <a href="#schedule">
                View Schedule
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="member-dashboard__class-list">
              {upcomingClasses.map((gymClass) => (
                <article
                  className="member-dashboard__class"
                  key={gymClass.title}
                >
                  <div className="member-dashboard__class-time">
                    <Clock3 size={17} />
                    <strong>{gymClass.time}</strong>
                  </div>

                  <div className="member-dashboard__class-info">
                    <span>{gymClass.type}</span>
                    <h3>{gymClass.title}</h3>
                    <p>
                      With {gymClass.trainer} · {gymClass.duration}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="member-dashboard__class-button"
                  >
                    Details
                    <ChevronRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </section>

          <aside className="member-dashboard__side">
            <section className="member-dashboard__profile">
              <div className="member-dashboard__profile-header">
                <div className="member-dashboard__avatar">
                  {firstName.charAt(0).toUpperCase()}
                </div>

                <div>
                  <span>Member Profile</span>
                  <h3>{user?.name}</h3>
                </div>
              </div>

              <div className="member-dashboard__profile-info">
                <div>
                  <UserRound size={16} />
                  <span>{user?.email}</span>
                </div>

                <div>
                  <CalendarDays size={16} />
                  <span>Member since 2026</span>
                </div>
              </div>

              <button type="button">
                Edit Profile
                <ChevronRight size={16} />
              </button>
            </section>

            <section className="member-dashboard__goal">
              <div className="member-dashboard__goal-top">
                <div>
                  <span>Monthly Goal</span>
                  <strong>7 / 10 Workouts</strong>
                </div>

                <Target size={23} />
              </div>

              <div className="member-dashboard__progress">
                <span style={{ width: "70%" }} />
              </div>

              <p>3 more workouts to complete your monthly goal.</p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default MemberDashboard;
