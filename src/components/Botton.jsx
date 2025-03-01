import React from 'react'

function Botton({
    children,
    type='button',
    bgcolor='bg-blue-500',
    textcolor='text-white',
    classname='',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${classname}`} type={type} {...props}>
        {children}
        
    </button>
  )
}

export default Botton
import React from 'react'


