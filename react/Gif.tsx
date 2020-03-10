// Dependencies
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface GifProps {
  
}

// CSS Handles
const CSS_HANDLES = ['gif'] as const 

const Gif: StorefrontFunctionComponent<GifProps> = ({ }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.gif} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
      Vou ser um GIF em breve...
    </div>
  )
}

Gif.schema = {
  title: 'editor.countdown-gif.title',
  description: 'editor.countdown-gif.description',
  type: 'object',
  properties: {}
}

export default Gif