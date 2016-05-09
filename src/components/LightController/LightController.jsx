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

  componentWillMount() {
    $.get('http://localhost:3001/api/light/devices').then((resp) => {
      console.log(resp.lights)
      //this.setState({devices: resp.lights})
      this.devices = resp.lights
    })
  }

  deviceSelect = (device) => {
    return () => {
      this.setState({target: device})
    }
  }

  render () {
    return (
      <div className="lightcontroller">
        <h3>Light Controller</h3>
        <DeviceSelector name="lightDevicePicker" devices={this.devices}/>
        <LightMaster socket={socket} />
        <LightModes />
      </div>
    )
  }
}

export default LightController
