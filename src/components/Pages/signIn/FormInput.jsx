import React from 'react'

const FormInput = ({ labelText, inputType, inputPlaceholder, required }) => {
  return (
    <div>
      <div>
        <label htmlFor="" className='font-bold text-[12px]'> {labelText} </label>
        {
          required ? <sup className='text-red-500 text-[12px]'>*</sup> : ""
        }
      </div>
      <div className='my-1'>
        <input type={inputType} placeholder={inputPlaceholder} className='border px-3 py-1' required={required} />
      </div>
    </div>
  )
}

export default FormInput
