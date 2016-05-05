import React from 'react'
import $ from 'jquery'

import Switch from './Switch'

class LightMaster extends React.Component {
  constructor (props) {
    super (props)
    this.state = {master: null, silent: null}
  }

  componentWillMount() {
    $.ajax('localhost:3001/api/light/state').then((state) => {
      console.log('Retreived state: %o', state)
      this.setState({master: state.master, silent: state.silent});
    })
  }

  toggleMaster = () => {
    return () => {
      console.log('toggle-master')
      this.setState({master: !this.state.master});
    }
  }
  toggleSilent = () => {
    return () => {
      console.log('toggle-silent')
      this.setState({silent: !this.state.silent});
    }
  }

  render () {
    return (
      <fieldset>
        <legend>Master</legend>
        <span>Power</span>
        <Switch state={this.state.master} onChange={this.toggleMaster()} />
        <span>Silent</span>
        <Switch state={this.state.silent} onChange={this.toggleSilent()} />
      </fieldset>
    )
  }
}

export default LightMaster
