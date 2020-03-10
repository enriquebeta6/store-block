import React, { Fragment } from 'react'

interface CountdownProps {
  targetDate: string
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
  return (<Fragment>
    <h1>{ targetDate }</h1>
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
      default: null
    }
  },
}

export default Countdown
