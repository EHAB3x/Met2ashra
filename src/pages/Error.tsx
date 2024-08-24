import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container mx-auto h-screen relative">
        <div className="flex flex-col justify-center items-center h-full gap-4">
            <h1 className="font-semibold text-[4rem]">404</h1>
            <p>There is no page with this name</p>
            <p>Back To <Link to={"/"} className="underline text-primary">Home Page</Link></p>
        </div>

        <span className="block w-[300px] h-[300px] rounded-full bg-primary fixed top-[-150px] left-[-150px]"></span>
        <span className="block w-[300px] h-[300px] rounded-full bg-primary fixed bottom-[-150px] right-[-150px]"></span>
    </div>
  )
}

export default Error