import React from 'react'

const WavyBackground = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-current text-white dark:text-gray-800"
        >
          <path
            fillOpacity="1"
            d="M0,192L80,192C160,192,320,192,480,170.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default WavyBackground
