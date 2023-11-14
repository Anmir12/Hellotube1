import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 m-3 p-1 rounded-sm border  '>{name}</button>
    </div>
  )
}

export default Button;