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
  });

  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime);

  return (
    <div className={`${handles.countdown} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
      <h1>
        {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
      </h1>
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
