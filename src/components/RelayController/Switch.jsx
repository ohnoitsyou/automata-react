import React from 'react'

require('./Switch.css')

class Switch extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      checked: this.props.startState
    }
  }

  _onChange = (event) => {
    this.setState({checked: event.target.checked})
  }

  render () {
    return (
			<span className="toggle">
				<input type="checkbox" onChange={this._onChange} checked={this.state.checked} />
				<label data-off="Off" data-on="On"></label>
			</span>
    )
  }
}

export default Switch
