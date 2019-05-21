import React from 'react'
import {useMedia} from 'use-media'

const Project = () => {
  const isWide = useMedia({ minWidth: 1000 })

  return (
    <div>
      Screen is wide: {isWide ? '😃' : '😢'}
    </div>
  )
}

export default Project