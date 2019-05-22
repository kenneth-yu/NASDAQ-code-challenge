import React from 'react'
import {connect} from 'react-redux'
import TransactionForm from '../components/TransactionForm'

class USD extends React.Component{
  state = {
    buyBTC: false
  }

  onClick = () => {
    this.setState({
      buyBTC: !this.state.buyBTC
    })
  }
  render(){
    return(
      <div>
        <span> You have ${this.props.currentUSD} USD</span><br/>
        <button onClick={this.onClick}>Buy BTC</button>
        {this.state.buyBTC ? <TransactionForm currency={"USD"}/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentUSD: state.currentUSD,
    BTCtoUSD: state.BTCtoUSD
  }
}

export default connect(mapStateToProps)(USD)
