// Dependencies
import React, { Fragment, useState } from 'react'

// Typings
import { TimeSplit } from './typings/global'

// Utils
import { tick } from './utils/time'

interface CountdownProps {
  targetDate: string
}

const DEFAULT_TARGET_DATE = (new Date('2020-03-11')).toISOString()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  tick(targetDate, setTime);

  return (<Fragment>
    <h1>
      {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
    </h1>
  </Fragment>)
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
