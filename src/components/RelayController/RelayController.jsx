import React from 'react'
import immutable from 'immutable'

import RelayMaster from './RelayMaster'
import RelayBox from './RelayBox'

class RelayController extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      states: immutable.fromJS([])
    }
  }

  componentWillMount() {
    this.setState({states: [{'state': false, 'id': 1}, {'state': true, 'id': 2}]})
  }

  render () {
    const relays = this.state.states.map((state, id) => 
      <RelayBox title={"Relay " + id} startState={state} />
    )
    return (
      <div className="relaycontroller">
        <h3>RelayController</h3>
        <RelayMaster />
        { relays }
      </div>
    )
  }
}

export default RelayController
