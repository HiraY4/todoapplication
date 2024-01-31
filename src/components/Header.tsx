import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { Separator } from '@radix-ui/react-separator';

export const Header = () => {
  return (
    <div className='flex justify-between w-full'>
      <div className='text-2xl p-2 flex items-center font-serif text-black'>
        <FaClipboardList className='mr-2 items-center mb-1 ml-2'/>Simple Todo App
        <Separator orientation='vertical'/>
      </div>
      <div className='text-black text-xl p-3'>
        <a href="https://github.com/HiraY4"
        target='blank'
        rel='noopener noreferrer'
        >
          <FaGithub className='flex w-9 h-11'/>
        </a>
      </div>
    </div>
  )
}
