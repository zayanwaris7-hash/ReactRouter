import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData();
    const inntial=50;
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers==0?  inntial:data.followers}
    <img className="text-center " src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    
  )
}

export default GitHub
export  const gitInfoLoader=async () => {
    const res= await fetch('https://api.github.com/users/zayanwaris7-hash');
    const data=await res.json();
    return data;
}