import React from 'react'

import LightMaster from './LightMaster'
import LightModes from './LightModes'

class LightController extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className="lightcontroller">
        <h3>Light Controller</h3>
        <LightMaster />
        <LightModes />
      </div>
    )
  }
}

export default LightController
