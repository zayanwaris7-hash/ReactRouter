import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData();
    const initial=50;
  return (
    <div className="max-w-2xl mx-auto my-10 overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl transition-all hover:shadow-indigo-500/10">
  <div className="flex flex-col md:flex-row items-center p-8 gap-8">
    
    {/* Profile Image with subtle glow */}
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <img 
        className="relative rounded-full border-4 border-slate-900 object-cover shadow-xl" 
        src={data.avatar_url} 
        alt="Git picture" 
        width={160} 
        height={160}
      />
    </div>

    {/* Content Area */}
    <div className="flex-1 text-center md:text-left space-y-4">
      <div>
        <h2 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          GitHub Profile
        </h2>
        <h1 className="text-3xl font-bold text-white mt-1">
          {data.name || "Anonymous Coder"}
        </h1>
      </div>

      <p className="text-slate-400 text-lg leading-relaxed font-light italic">
        "{data.bio || "No bio available at the moment."}"
      </p>

      {/* Stats Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
        <span className="text-slate-300 mr-2">Followers:</span>
        <span className="text-white font-mono font-bold">
          {data.followers === 0 ? initial : data.followers}
        </span>
      </div>
    </div>

  </div>
</div>
    
  )
}

export default GitHub
export  const gitInfoLoader=async () => {
    const res= await fetch('https://api.github.com/users/zayanwaris7-hash');
    const data=await res.json();
    return data;
}