import React from 'react'
import { useId } from 'react'


function selectbtn({
    options,
    lebel,
    className='',
    ...props

},ref) {
    const id=useId()
  return (
    <div className='w-full'>
        {lebel && <label className="inline-block mb-1 pl-1" htmlFor={id}>{lebel}</label>}
        <select name="" {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-300 border border-gray-300 w-full ${className}`}>
            {options?.map((option)=>(
                <option key={option} value={option.value}>{option}</option>
            ))}
        </select>

    </div>
  )
}

export default React.forwardRef(selectbtn)