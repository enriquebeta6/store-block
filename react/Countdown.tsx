import React, { Fragment } from 'react'

interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  return (<Fragment>
    <h1>Teste Countdown</h1>
  </Fragment>)
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown
