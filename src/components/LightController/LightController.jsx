import React from 'react'
import io from 'socket.io-client'

import LightMaster from './LightMaster'
import LightModes from './LightModes'

const socket = io('http://localhost:3001/light')

class LightController extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className="lightcontroller">
        <h3>Light Controller</h3>
        <LightMaster socket={socket}/>
        <LightModes />
      </div>
    )
  }
}

export default LightController
