import React from 'react'

class DeviceSelector extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.devices)
  }

  render() {
    const devicelist = this.props.devices.map((device) => {
      <option value={device}>{device}</option>
    })
    return (
      <select name={this.props.name}>
        devicelist
      </select>
    )
  }
}

export default DeviceSelector
