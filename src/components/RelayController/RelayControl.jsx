import React from 'react'
import immutable from 'immutable'

import Switch from './Switch'

class RelayControl extends React.Component {
  constructor (props) {
    super (props)
      this.state = {states: immutable.fromJS([])
  }

  render () {
    const relays = this.state.states.map((state, id) =>
      <Relay state={state} toggle=this.toggle(id)} key={id} />
    )
    return <div>{relays}</div>
  }
}

export default RelayControl
