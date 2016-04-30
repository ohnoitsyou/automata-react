import React from 'react'
import ReactDOM from 'react-dom'

import { CommentBox } from './components/CommentBox'
import LightController from './components/LightController'

ReactDOM.render (
  <div>
    <LightController />
  </div>,
  document.getElementById('react-mount')
)
