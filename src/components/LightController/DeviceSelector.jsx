import React from 'react'
import $ from 'jquery'

class DeviceSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {devices: [], value:"loading..."}
  }

  componentWillMount() {
    $.get('http://localhost:3001/api/light/devices').then((resp) => {
      this.setState({devices: resp.lights})
      this.props.bubbleSelect(this.state.devices[0])
    })
  }

  handleChange(event) {
    console.log('event:', event.target.value)
    this.setState({value: event.target.value})
    this.props.bubbleSelect(event.target.value)
  }

  render() {
    const devicelist = this.state.devices.map((device, id) => {
      return <option value={device} key={id}>{device}</option>
    })
    return (
      <select value={this.state.value} name={this.props.name} onChange={this.handleChange}>
        {devicelist}
      </select>
    )
  }
}

export default DeviceSelector
