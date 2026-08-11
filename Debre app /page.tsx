import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Check, 
  AlertTriangle, 
  ChevronRight, 
  User, 
  Command, 
  Plane,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

export default function ChronosExecutiveDashboard() {
  const [activeTab, setActiveTab] = useState('all');

  const metrics = [
    { label: "Focus Hours Secured", value: "18.5 hrs", change: "+12% this week", positive: true },
    { label: "Conflicts Auto-Resolved", value: "14", change: "Saved 3.2 hrs", positive: true },
    { label: "VIP Client Sessions", value: "6 Scheduled", change: "100% On Time", positive: true },
    { label: "Travel Buffer Saved", value: "45 mins", change: "NYC Flight Synced", positive: true },
  ];

  const scheduleEvents = [
    {
      id: "1",
      time: "09:00 AM - 10:00 AM",
      title: "Q3 Board Strategy & Capital Allocation",
      type: "VIP Meeting",
      location: "Executive Suite A / Zoom",
      attendees: ["Sarah Jenkins (CFO)", "Michael Chen (CEO)"],
      status: "Confirmed",
      isAiOptimized: true,
      tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
      id: "2",
      time: "11:30 AM - 12:15 PM",
      title: "Private Flight JS-802 Departure",
      type: "Travel",
      location: "Teterboro Airport (TEB) → JFK",
      attendees: ["Solo"],
      status: "Optimized",
      isAiOptimized: true,
      tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20"
    },
    {
      id: "3",
      time: "02:00 PM - 02:45 PM",
      title: "Series C Lead Investor Briefing",
      type: "VIP Meeting",
      location: "The Carlyle, NYC",
      attendees: ["David Ross (Sequoia)"],
      status: "Action Needed",
      isAiOptimized: false,
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    }
  ];

  const aiInsights = [
    {
      id: "ai-1",
      title: "Potential Travel Conflict Detected",
      description: "NYC traffic buffer is tight (18 mins). Chronos pushed Sequoia briefing back by 15 mins to guarantee zero delay.",
      time: "10 mins ago",
      type: "urgent"
    },
    {
      id: "ai-2",
      title: "3 Double-Bookings Auto-Resolved",
      description: "Shifted internal status syncs to tomorrow morning during your designated 'Low Energy' window.",
      time: "1 hr ago",
      type: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white p-4 md:p-8">
      
      {/* FLOATING GLASS NAVBAR */}
      <header className="sticky top-4 z-50 max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              C
            </div>
            <div>
              <span className="font-semibold tracking-tight text-sm text-zinc-100">CHRONOS</span>
              <span className="text-xs text-zinc-500 font-mono ml-2">v2.5 EXEC</span>
            </div>
          </div>

          {/* AI STATUS BADGE */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Autonomous Copilot Active
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-800/60 border border-white/10 px-3 py-1.5 rounded-lg hover:text-zinc-200 transition-colors">
              <Command className="w-3.5 h-3.5" />
              <span>K</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-300">
              EA
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto space-y-6">
        
        {/* HERO TITLE & ACTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50">Executive Schedule</h1>
            <p className="text-sm text-zinc-400 mt-1 font-mono">Tuesday, August 11, 2026 • New York (EST)</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-zinc-200 text-xs px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm">
              <CalendarIcon className="w-4 h-4 text-zinc-400" />
              Sync Calendars
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-xs px-4 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/25">
              <Sparkles className="w-4 h-4" />
              Arrange New VIP Event
            </button>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
              <span className="text-xs text-zinc-400 font-medium block mb-2">{m.label}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold font-mono text-zinc-50">{m.value}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {m.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN DASHBOARD CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SCHEDULE TIMELINE (2 COLUMNS) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <h2 className="text-sm font-semibold tracking-wide text-zinc-200 uppercase font-mono">Today's Itinerary</h2>
                </div>
                
                {/* TABS */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-950 border border-white/5 text-xs">
                  {['all', 'meetings', 'travel'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-lg capitalize transition-all ${
                        activeTab === tab ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* TIMELINE CARDS */}
              <div className="space-y-4">
                {scheduleEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="group relative p-5 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                          {event.time}
                        </span>
                        {event.isAiOptimized && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                            <Sparkles className="w-3 h-3" /> AI Synced
                          </span>
                        )}
                      </div>
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border border-solid ${event.tagColor}`}>
                        {event.type}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-indigo-200 transition-colors">
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-zinc-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{event.attendees.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* AI COPILOT SIDEBAR (1 COLUMN) */}
          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <h2 className="text-sm font-semibold tracking-wide text-zinc-200 uppercase font-mono">Copilot Feed</h2>
              </div>

              <div className="space-y-4">
                {aiInsights.map((insight) => (
                  <div key={insight.id} className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{insight.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">{insight.time}</span>
                    </div>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed">{insight.description}</p>
                    
                    <div className="flex items-center gap-2 pt-1">
                      <button className="w-full py-1.5 px-3 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs font-mono border border-indigo-500/30 transition-all flex items-center justify-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Approve Optimization
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* QUICK ASSISTANT PROMPT INLINE */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <label className="text-xs font-mono text-zinc-400 block mb-2">Prompt Executive AI</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="e.g., Block 2 hours focus time tomorrow..." 
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                  />
                  <button className="absolute right-2 top-2 p-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
