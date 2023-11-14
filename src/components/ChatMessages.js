import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    <div className='flex items-center my-3'>
        <img className="h-6 w-8" src="http://localhost:3000/images/user.svg" />
        <p className='font-bold text-blue-500'>{name}</p>
        <p className='ml-2 text-black'>{message}</p>
    </div>
  )
}

export default ChatMessages