import React from 'react'

class ModeButton extends React.Component {
  constructor (props) {
    super (props)
  }
 
  render () {
    return (
      <input type="button" onClick={this.props.click} value={this.props.children} />
    )
  }
}

export default ModeButton
