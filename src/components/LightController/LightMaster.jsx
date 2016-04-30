import React from 'react'

import Switch from './Switch'

class LightMaster extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      masterState: false,
      silentState: true
    }
  }

  toggleMaster = () => {
    return () => {
      console.log("Toggling master")
    }
  }
  toggleSilent = () => {
    return () => {
      console.log("Toggling silent")
    }
  }

  render() {
    return (
      <fieldset>
        <legend>Master</legend>
        <span>Power</span>
        <Switch startState={this.state.masterState} />
        <span>Silent</span>
        <Switch startState={this.state.silentState} />
      </fieldset>
    )
  }
}

export default LightMaster
