import React from 'react'

export const Dropdown = (props) => {
  return (
    <div
      className={`absolute top-[60px] w-[300px] ${props.heightTWProps} bg-red-400 px-[20px] py-[20px] rounded-[30px]`}
    >
      <ul className="flex flex-col gap-[10px]">
        <li>123123</li>
        <li>123123</li>
        <li>123123</li>
        <li>123123</li>
      </ul>
    </div>
  )
}
