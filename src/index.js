import React from 'react'
import ReactDOM from 'react-dom'

import LightController from './components/LightController'
import RelayController from './components/RelayController'

ReactDOM.render (
  <div>
    <LightController />
    <RelayController />
  </div>,
  document.getElementById('react-mount')
)
