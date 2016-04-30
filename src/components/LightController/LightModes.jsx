import React from 'react'

import ModeButton from './ModeButton'

class LightModes extends React.Component {
  constructor (props) {
    super(props)
  }


  setMode = (mode) => {
    return () => {
      console.log("Setting mode: %s", mode)
    }
  }

  render () {
    return (
      <fieldset>
        <legend>Modes</legend>
        <ModeButton click={this.setMode(0)}>Off</ModeButton>
        <ModeButton click={this.setMode(1)}>Random</ModeButton>
        <ModeButton click={this.setMode(2)}>Fade</ModeButton>
        <ModeButton click={this.setMode(3)}>Static</ModeButton>
      </fieldset>
    )
  }
}

export default LightModes
