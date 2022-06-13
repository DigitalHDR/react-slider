import React, { useState } from 'react'
import './styles.css'
import { motion } from 'framer-motion'
import data from '../../data'

export const SliderTeste = () => {
  const [position, setPosition] = useState(0)

  const onRight = () => {
    if (position < data.images.length - 1) {
      setPosition(position + 1)
    }
  }

  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }

  return (
    <div className='containerGeral'>
      <div
        style={{
          position: 'absolute',
          top: 30,
          left: 30,
          zIndex: 100
        }}
      >
        <button onClick={onLeft}>&lt;&lt;</button>
        <button onClick={onRight}>&gt;&gt;</button>
      </div>
      <div className="row">
        {data.images.map((url, index) => (
          <motion.div
            className="container"
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              rotate: 0,
              left: `${(index - position) * 100 - 5}vw`,
              scale: index === position ? 1 : 0.8,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          >
            <img src={url.imageurl} alt="algo" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
