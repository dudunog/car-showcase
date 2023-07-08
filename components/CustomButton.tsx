'use client'

import React, { MouseEventHandler } from 'react'

interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  containerStyle,
  handleClick
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type='button'
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
