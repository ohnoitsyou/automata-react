import React from 'react'

import Switch from './Switch'

class RelayMaster extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      allState: false,
      silentState: false
    }
  }

  render () {
    return (
      <fieldset>
        <legend>Master</legend>
        <span>All</span>
        <Switch startState={this.state.allState} />
        <span>Silent</span>
        <Switch startState={this.state.silentState} />
      </fieldset>
    )
  }
}

export default RelayMaster
