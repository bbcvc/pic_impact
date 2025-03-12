import React from 'react'
import Highlight from './highlight'
import { hero, author } from '../../config.json'
import SocialList from './social-list'

const Hero = () => {
  return (
    <div className='lg:-mt-16 lg:h-dvh lg:min-h-[720px]'>
      <div className='relative max-w-[1300px] mx-auto h-full px-4 grid lg:grid-cols-2 items-center justify-items-center'>
        <div className='mt-[120px] lg:mt-0 max-w-[590px]'>
          <h1 className='text-3xl text-center lg:text-left text-balance'>
            {hero.sayHi}{' '}
            <Highlight className='relative font-bold'>{hero.name}</Highlight>👋
            <br />
            {hero.bio}
          </h1>

          <div className='text-sm text-[rgb(113,113,122)] mt-3 text-center lg:text-left'>
            {hero.description}
          </div>
          <SocialList classNames='mt-[60px]' />
        </div>
        <div className='mt-20 lg:mt-0'>
          <div className='size-[200px] lg:size-[300px] rounded-full overflow-hidden border border-primary bg-zinc-100 dark:bg-zinc-800'>
            <img
              className='size-full'
              src={author.avatar}
              alt='Site owner avatar'
              loading='lazy'
            />
          </div>
        </div>

        <div className='mt-10 lg:mt-0 lg:absolute inset-x-0 bottom-0 flex flex-col items-center'>
          <p className='text-xs text-center text-balance text-secondary'>
            {hero.yiyan}
          </p>
          <div className='mt-7 text-xl animate-bounce'>
            <i className='iconfont icon-down'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
