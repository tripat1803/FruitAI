import React from 'react'
import FAQ from './FaQ'
const FaQ = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#C9ABEF] to-[#7FE7EE] relative">
      <h2 className='text-3xl font-bold'>FaQ Section</h2>
      {/* <div className='flex w-72 sm:w-96 bg-slate-200 min-h-24 max-h-36 rounded-xl items-center gap-4 p-4'>
        <img src='tangerine.png' className='h-20 w-20'/>
        <div className='flex flex-col'>
        <p className='text-lg float-right'>How is Tangerine healthy?</p>
        <p className=''>Tangerine are a great health booster due to their
high vitamin C content, which supports the 
immune system and skin health. </p>
</div> */}


        {/* </div> */}
        <FAQ/>
      </div>
  )
}

export default FaQ