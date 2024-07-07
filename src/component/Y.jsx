import React from 'react'
import { useSelector } from 'react-redux'

const Y = () => {
  const count=useSelector(state=>state.counterx.count)
  return (
    <div className='text-blue-600'>
      <p>From Y: {count}</p>
    </div>
  )
}

export default Y