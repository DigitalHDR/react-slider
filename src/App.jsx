import './App.css'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import data from './data'

function App() {
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
    <div className="App">
      <div
        style={{
          position: 'absolute',
          top: 30,
          left: 30,
        }}
      >
        <button onClick={onRight}>&lt;&lt;</button>
        <button onClick={onLeft}>&gt;&gt;</button>
      </div>
      <div className="row">
        {data.images.map((url, index) => (
          <motion.div
            className="container"
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              rotate: 0,
              left: `${(index - position) * 60 - 30}vw`,
              scale: index === position ? 1 : 0.8,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <img src={url.imageurl} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default App
