'use client'

import clsx from 'clsx'
import { hero } from '~/config.json'
import { motion } from 'framer-motion'
import { Xhs } from '../icons/xhs'
import { Ins } from '../icons/ins'
import { Weibo } from '../icons/Weibo'
import { BiliBili } from '../icons/bilibili'

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

function SocialList({ classNames }: { classNames?: string }) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <>
      <motion.ul
        className={clsx(
          'flex gap-4 flex-wrap items-center justify-center lg:justify-start',
          classNames,
        )}
        initial='hidden'
        animate='visible'
        transition={{
          staggerChildren: 0.1,
        }}
      >
        {hero.socials?.map((social) => (
          <motion.li key={social.name} variants={itemVariants}>
            <a
              className='relative size-9 text-white text-xl flex justify-center items-center group'
              href={isMobile ? social.mobil : social.url}
              title={social.name}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='absolute inset-0 -z-1 rounded-full group-hover:scale-105 transition'></span>
              {social.icon === 'xhs' && <Xhs />}
              {social.icon === 'instagram' && <Ins />}
              {social.icon === 'weibo' && <Weibo />}
              {social.icon === 'bilibili' && <BiliBili />}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

export default SocialList
