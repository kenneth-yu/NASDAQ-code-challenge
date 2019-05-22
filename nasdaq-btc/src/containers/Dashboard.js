import React from 'react'
import {connect} from 'react-redux'
import USD from './USD'
import BTC from './BTC'

class Dashboard extends React.Component{
  render(){
    return (
      <div>
        <span> 1 BTC = ${this.props.BTCtoUSD} USD</span><br/>
        <USD/>
        <BTC/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentUSD: state.currentUSD,
    currentBTC: state.currentBTC,
    BTCtoUSD: state.BTCtoUSD
  }
}

export default connect(mapStateToProps)(Dashboard)
