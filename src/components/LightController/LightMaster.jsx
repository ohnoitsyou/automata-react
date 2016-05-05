import React from 'react'
import immutable from 'immutable'
import $ from 'jquery'

import Switch from './Switch'

class LightMaster extends React.Component {
  constructor (props) {
    super (props)
    this.state = {states: immutable.fromJS({})}
  }

  componentWillMount() {
    $.ajax('localhost:3001/api/light/state').then((state) => {
      console.log('Retreived state: %o', state)
      this.setState({states: immutable.fromJS(state)})
    })
  }

  toggleMaster = () => {
    return () => {
      console.log('toggle-master')

      let oldState = this.state.states.get('master');
      this.setState({states: this.state.states.set('master', !oldState)});
    }
  }
  toggleSilent = () => {
    return () => {
      console.log('toggle-silent')
      let oldState = this.state.states.get('silent');
      this.setState({states: this.state.states.set('silent', !oldState)});
    }
  }

  render () {
    return (
      <fieldset>
        <legend>Master</legend>
        <span>Power</span>
        <Switch state={this.state.states.get('master')} onChange={this.toggleMaster()} />
        <span>Silent</span>
        <Switch state={this.state.get('silent')} onChange={this.toggleSilent()} />
      </fieldset>
    )
  }
}

export default LightMaster
