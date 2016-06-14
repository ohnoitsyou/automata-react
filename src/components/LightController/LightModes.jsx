import React from 'react'
import $ from 'jquery'

import ModeButton from './ModeButton'

class LightModes extends React.Component {
  constructor (props) {
    super(props)
  }

  setMode = (mode) => {
    return () => {
      console.log("Setting mode: %s", mode)
      $.post('http://localhost:3000/api/light/mode/' + mode + '/' + this.props.target).then((resp) => {
        console.log('Mode changed %o', resp)
      })
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
