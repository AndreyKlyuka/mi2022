import React from 'react'

export const Dropdown = (props) => {
  return (
    <div
      className={`absolute top-[60px] w-[300px] h-[${props.height}px] bg-red-400 px-[20px] py-[20px] rounded-[30px]`}
    >
      <ul className="flex flex-col gap-[10px]">
        <li>sdfsdf</li>
        <li>sdfsdffsdf</li>
        <li>ssdsdfsdsfsdf</li>
        <li>ssdsdfsdsfsdf</li>
        <li>sdfsdf</li>
        <li>sdfsdffsdf</li>
        <li>ssdsdfsdsfsdf</li>
        <li>...</li>
      </ul>
    </div>
  )
}
