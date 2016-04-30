import React from 'react'

import LightMaster from './LightMaster'
import LightModes from './LightModes'

class LightController extends React.Component {
  constructor (props) {
    super (props)
  }

  masterOn = () => {
    return () => {
    }
  }

  render () {
    return (
      <div className="lightcontroller">
        <LightMaster />
        <LightModes />
      </div>
    )
  }
}

export default LightController
