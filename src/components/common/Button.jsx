import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text="button", link="/", type="primary" }) => {
  if (type==="primary") {
    return (<button className='flex justify-center items-center bg-secondary border-none p-4 rounded-xl w-full cursor-pointer'>
        <Link to={link}> <p className='uppercase text-white text-xl'> {text} </p> </Link>
    </button>)
  }
  if (type==="secondary") {
    return (<button className='flex justify-center items-center border border-solid bg-transparent border-dark-blue p-4 rounded-xl w-full cursor-pointer'>
        <Link to={link}> <p className='capitalize text-dark-blue text-xl'> {text} </p> </Link>
    </button>)
  }
}

export default Button
