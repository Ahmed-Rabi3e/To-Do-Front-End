import React from 'react'
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
    return (
        <div className='w-full h-[calc(100vh-64px)] bg-light flex flex-col justify-center items-center'>
            <TbError404 size={300} />
            <h1 className='font-mono text-4xl text-red-700'>OOPs, Not Found</h1>
        </div>
    )
}

export default NotFound