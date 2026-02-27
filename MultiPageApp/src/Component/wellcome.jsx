import React from 'react';

function Wellcome({ userName = "Guest" }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-transparent">
      <div className="text-center space-y-6 p-8 rounded-2xl transition-all duration-700 ease-in-out">
        
        {/* Subtle Decorative Element */}
        <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
          Dashboard Access
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            {userName}
          </span>!
        </h1>

        {/* Subtext */}
        <p className="max-w-md mx-auto text-lg text-slate-500 font-light leading-relaxed">
          It’s great to see you again. We’ve updated your personalized workspace with the latest insights.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
            View Activity
          </button>
          <button className="px-8 py-3 bg-white text-slate-600 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
            Account Settings
          </button>
        </div>

      </div>
    </div>
  );
}

export default Wellcome;