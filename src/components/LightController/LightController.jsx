import React from 'react'
import io from 'socket.io-client'
import $ from 'jquery'

import LightMaster from './LightMaster'
import LightModes from './LightModes'
import DeviceSelector from './DeviceSelector'

const socket = io('http://localhost:3000/light')

class LightController extends React.Component {
  constructor (props) {
    super (props)
    this.state = {devices: [], target: ''}
  }

  componentWillMount() {
    $.get('http://localhost:3000/api/light/devices').then((resp) => {
      resp.lights.map((device) => {
        $.get('http://localhost:3000/api/light/state/'+device).then((resp) => {
          var target = devices[device]
          this.setState({target: resp})
          console.log(this.state)
        })
      })
    })
  }

  render () {
    const controls = this.state.devices.map((device) => {
      return (
        <div>
          <LightMaster target={device} socket={socket} />
          <LightModes target={device} />
        </div>
      )
    })
    return (
      <div className="lightcontroller">
        <h3>Light Controller</h3>
          {controls}
      </div>
    )
  }
}

export default LightController
