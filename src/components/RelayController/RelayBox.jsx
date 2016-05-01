import React from 'react'

import Switch from './Switch'

class RelayBox extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <fieldset>
        <legend>{this.props.title}</legend>
        <Switch startState={this.props.startState} /> 
      </fieldset>
    )
  }
}

export default RelayBox
