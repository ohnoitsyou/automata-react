import React from 'react'
import $ from 'jquery'

import Switch from './Switch'

class LightMaster extends React.Component {
  constructor (props) {
    super (props)
    this.state = {master: null, silent: null}
  }

  componentWillMount() {
    $.ajax('http://localhost:3001/api/light/state').then((state) => {
      console.log('Retreived state: %o', state)
      this.setState({master: state.master, silent: state.silent});
    })
  }

  toggleMaster = () => {
    return () => {
      console.log('toggle-master')
      $.post('http://localhost:3001/api/light/toggle/master').then((resp) => {
        if(this.state.master != resp.mode) {
          console.log('updating master state: %s', !this.state.master)
          this.setState({master: !this.state.master});
        }
      })
    }
  }
  toggleSilent = () => {
    return () => {
      console.log('toggle-silent')
      $.post('http://localhost:3001/api/light/toggle/silent').then((resp) => {
        if(this.state.silent != resp.mode) {
          console.log('updating silent state: %s', !this.state.silent)
          this.setState({silent: !this.state.silent});
        }
      })
    }
  }

  render () {
    return (
      <fieldset>
        <legend>Master</legend>
        <span>Power</span>
        <Switch checked={this.state.master} onChange={this.toggleMaster()} />
        <span>Silent</span>
        <Switch checked={this.state.silent} onChange={this.toggleSilent()} />
      </fieldset>
    )
  }
}

export default LightMaster
