import React from 'react'
import {connect} from 'react-redux'

class USD extends React.Component{
  render(){
    return(
      <div>
        <span> You have {this.props.currentBTC} BTC</span><br/>
        <button>Sell BTC</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentBTC: state.currentBTC,
    BTCtoUSD: state.BTCtoUSD
  }
}

export default connect(mapStateToProps)(USD)
