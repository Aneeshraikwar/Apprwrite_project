import { forwardRef,useId } from "react";
import React from "react";
forwardRef(() => { });
const id=useId()
const Input = React.forwardRef(function Input(
  {
    lebel,
    type = "text",
    className = "",

    ...props
  },
  ref
) {
  return (
    <div className="w-full">
      {lebel && <label className="inline-block mb-1 pl-1" htmlFor={id}>{lebel}</label>}
    <input type="text"
       className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-300 border border-gray-300 w-full`}
        ref={ref}
        {...props}
        id={id}
/> 
</div>
  );
});

export default Input;
