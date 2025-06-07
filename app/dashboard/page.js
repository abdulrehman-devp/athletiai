"use client";
import { useState } from "react";
import {
  Activity,
  Target,
  ChevronRight,
  BarChart2,
  Calendar,
  Users,
  Settings,
  Zap,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Dashboard() {
  const { user } = useUser();
  const [activeSection, setActiveSection] = useState("overview");
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading state for animations
  useState(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    {
      label: "Calories Burned",
      value: "2,847",
      color: "from-green-600 to-green-500",
      icon: "🔥",
    },
    {
      label: "Steps Today",
      value: "12,450",
      color: "from-green-500 to-green-400",
      icon: "👟",
    },
    {
      label: "Active Minutes",
      value: "87",
      color: "from-green-400 to-green-300",
      icon: "⏱️",
    },
    {
      label: "Heart Rate",
      value: "72",
      color: "from-green-700 to-green-600",
      icon: "❤️",
    },
  ];
  const menuItems = [
    {
      id: "overview",
      name: "Overview",
      icon: BarChart2,
      description: "Your fitness summary",
    },
    {
      id: "ai-coach",
      name: "AI Coach",
      icon: Zap,
      description: "Personal AI fitness coach",
    },
    {
      id: "workouts",
      name: "Workouts",
      icon: Target,
      description: "Browse workout plans",
    },
    {
      id: "saved",
      name: "Saved",
      icon: Calendar,
      description: "Your saved workouts",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/40 to-gray-50/30">
      {/* Dashboard Content */}
      <div className="container mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-playfair mb-2">
              Welcome back, {user?.firstName || "Athlete"}!
            </h1>
            <p className="text-gray-600 font-montserrat">
              {menuItems.find((item) => item.id === activeSection)?.description}
            </p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-black/90 transition-all duration-300 text-sm font-medium">
            New Workout
          </button>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 font-montserrat">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-montserrat">
                {stat.label}
              </div>
              <div
                className={`w-full h-1 bg-gradient-to-r ${stat.color} rounded-full mt-3 opacity-60`}
              ></div>
            </div>
          ))}
        </div>{" "}
        {/* Main Dashboard Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 p-4">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                    {activeSection === item.id && (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
              {activeSection === "overview" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 font-montserrat">
                        Weekly Progress
                      </h2>
                      <p className="text-sm text-gray-500 font-montserrat">
                        Your fitness journey this week
                      </p>
                    </div>
                  </div>

                  {/* Activity Chart */}
                  <div className="h-64 flex items-center justify-center border border-gray-100 rounded-xl bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 mb-8">
                    <div className="text-center">
                      <BarChart2 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <div className="text-gray-500 text-sm font-montserrat">
                        Activity Analytics
                      </div>
                    </div>
                  </div>

                  {/* Recent Activities */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">
                      Recent Activities
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          type: "Running",
                          duration: "30 min",
                          calories: "350",
                          time: "2h ago",
                        },
                        {
                          type: "Strength",
                          duration: "45 min",
                          calories: "420",
                          time: "Yesterday",
                        },
                        {
                          type: "Yoga",
                          duration: "60 min",
                          calories: "200",
                          time: "2 days ago",
                        },
                      ].map((activity, i) => (
                        <div
                          key={i}
                          className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-green-100 transition-colors duration-300"
                        >
                          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                            <Activity className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 font-montserrat">
                              {activity.type}
                            </h4>
                            <p className="text-xs text-gray-500 font-montserrat">
                              {activity.duration} • {activity.calories} calories
                            </p>
                          </div>
                          <span className="text-xs text-gray-400 font-montserrat">
                            {activity.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "ai-coach" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 font-montserrat">
                        AI Coach
                      </h2>
                      <p className="text-sm text-gray-500 font-montserrat">
                        Your personal AI fitness assistant
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Start a Coaching Session
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Get personalized workout recommendations and real-time
                          form feedback
                        </p>
                        <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-black/90 transition-all duration-300 text-sm font-medium">
                          Begin Session
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Previous Sessions
                    </h3>
                    {[
                      {
                        name: "HIIT Workout Plan",
                        date: "Yesterday",
                        status: "Completed",
                      },
                      {
                        name: "Strength Training",
                        date: "3 days ago",
                        status: "In Progress",
                      },
                      {
                        name: "Flexibility Focus",
                        date: "1 week ago",
                        status: "Completed",
                      },
                    ].map((session, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-gray-100 hover:border-green-100 transition-all duration-300"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {session.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {session.date}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              session.status === "Completed"
                                ? "bg-green-100 text-green-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {session.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "workouts" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 font-montserrat">
                        Workout Library
                      </h2>
                      <p className="text-sm text-gray-500 font-montserrat">
                        Browse and start workouts
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "HIIT Cardio",
                        duration: "30 min",
                        level: "Intermediate",
                        calories: "400",
                      },
                      {
                        name: "Core Strength",
                        duration: "25 min",
                        level: "Beginner",
                        calories: "200",
                      },
                      {
                        name: "Full Body Power",
                        duration: "45 min",
                        level: "Advanced",
                        calories: "550",
                      },
                      {
                        name: "Yoga Flow",
                        duration: "40 min",
                        level: "All Levels",
                        calories: "150",
                      },
                    ].map((workout, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl border border-gray-100 hover:border-green-100 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-medium text-gray-900">
                            {workout.name}
                          </h3>
                          <span className="bg-green-50 text-green-600 px-2 py-1 rounded-lg text-xs">
                            {workout.level}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{workout.duration}</span>
                          <span>{workout.calories} cal</span>
                        </div>
                        <button className="w-full mt-4 bg-gray-50 text-gray-600 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium group-hover:bg-black group-hover:text-white">
                          Start Workout
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "saved" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 font-montserrat">
                        Saved Workouts
                      </h2>
                      <p className="text-sm text-gray-500 font-montserrat">
                        Your personalized workout collection
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        name: "Morning Energizer",
                        type: "Custom",
                        lastDone: "2 days ago",
                      },
                      {
                        name: "Strength Builder",
                        type: "AI Generated",
                        lastDone: "1 week ago",
                      },
                      {
                        name: "Recovery Routine",
                        type: "Custom",
                        lastDone: "3 days ago",
                      },
                    ].map((saved, i) => (
                      <div
                        key={i}
                        className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-green-100 transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                          <Target className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {saved.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {saved.type} • Last done {saved.lastDone}
                          </p>
                        </div>
                        <button className="ml-4 px-3 py-1 text-sm text-gray-600 hover:text-green-600 transition-colors duration-300">
                          Start
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Activities */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">
                  Recent Activities
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-green-100 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 font-montserrat">
                          Completed Workout
                        </h4>
                        <p className="text-xs text-gray-500 font-montserrat">
                          30 min • 250 calories
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 font-montserrat">
                        2h ago
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
