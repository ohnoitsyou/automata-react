import React from 'react'

require('./Switch.css')

class Switch extends React.Component {
  _onChange = (event) => {
    console.log('onChange fired')
    this.props.onChange()
    console.log(event.target.checked)
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
