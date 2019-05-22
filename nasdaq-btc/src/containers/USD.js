import React from 'react'
import {connect} from 'react-redux'

class USD extends React.Component{
  render(){
    return(
      <div>
        <span> You have ${this.props.currentUSD} USD</span><br/>
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
