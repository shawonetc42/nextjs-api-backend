import React from 'react'

function TopHeader() {
  return (
    <div className='flex border-b py-2'>
      <div className='flex flex-col md:flex-row  justify-between  container mx-auto text-sm text-gray-500'>
        <div className='flex gap-2 boeder-2'>
            <h1>About Us</h1>
            <h1>Contact</h1>
            <h1>Help</h1>
        </div>
        {/* 2 */}
        <div className='flex gap-2 boeder-2'>
            <h1>100% Secure delivery without contacting the couriers</h1>
        </div>
        {/* last */}
        <div className='flex gap-2 boeder-2'>
            <h1>About Us</h1>
            <h1>Contact</h1>
            <h1>Help</h1>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
