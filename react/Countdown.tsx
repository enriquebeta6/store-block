// Dependencies
import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

// Typings
import { TimeSplit } from './typings/global'

// Utils
import { tick } from './utils/time'

interface CountdownProps {
  targetDate: string
}

const DEFAULT_TARGET_DATE = (new Date('2020-03-11')).toISOString()

// CSS HANDLES
const CSS_HANDLES = ['countdown']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime);

  return (
    <div className={`${handles.countdown} db tc`}>
      {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Sou um título',
      description: 'Sou uma descrição',
      type: 'string',
      default: DEFAULT_TARGET_DATE
    }
  },
}

export default Countdown
