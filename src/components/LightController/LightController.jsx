import React from 'react'
import io from 'socket.io-client'
import $ from 'jquery'

import LightMaster from './LightMaster'
import LightModes from './LightModes'
import DeviceSelector from './DeviceSelector'

const socket = io('http://localhost:3001/light')

class LightController extends React.Component {
  constructor (props) {
    super (props)
    this.state = {devices: [], target: ''}
    this.devices = []
  }

  deviceSelect = (device) => {
    return (device) => {
      console.log('Bubble selection', device)
      this.setState({target: device})
      console.log('target:', this.state.target)
    }
  }

  render () {
    return (
      <div className="lightcontroller">
        <h3>Light Controller</h3>
        <DeviceSelector name="lightDevicePicker" bubbleSelect={this.deviceSelect()} />
        <LightMaster target={this.state.target} socket={socket} />
        <LightModes target={this.state.target} />
      </div>
    )
  }
}

export default LightController
