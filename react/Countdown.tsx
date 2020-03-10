// Dependencies
import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

// Typings
import { TimeSplit } from './typings/global'

// Utils
import { tick } from './utils/time'

interface CountdownProps {
  title: string,
  targetDate: string
}

const DEFAULT_TARGET_DATE = (new Date('2020-03-11')).toISOString()

// CSS HANDLES
const CSS_HANDLES = ['countdown', 'container', 'title']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ title, targetDate }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const titleText = title || <FormattedMessage id="countdown.title"/>
  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime);

  return (
    <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1`}>
      <div className={`${handles.title} db tc`}>
        { titleText }
      </div>

      <h1 className={`${handles.countdown} db tc`}>
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
    title: {
      title: 'Sou um título',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'Sou um título',
      description: 'Sou uma descrição',
      type: 'string',
      default: DEFAULT_TARGET_DATE
    }
  },
}

export default Countdown
