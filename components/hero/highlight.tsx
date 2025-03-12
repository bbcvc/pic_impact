import React from 'react'

const Highlight = (props: React.ComponentPropsWithoutRef<'span'>) => {
  const { children, ...restProps } = props
  return (
    <span className='relative' {...restProps}>
      <span className='absolute -z-1 top-[30%] left-0 w-full h-[40%] bg-[rgba(50,204,188,0.3)] -rotate-3'></span>
      {props.children}
    </span>
  )
}

export default Highlight
