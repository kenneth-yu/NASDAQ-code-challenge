import React from 'react'

class TransactionForm extends React.Component{
  render(){
    return(
      <div>
        <span>How much {this.props.currency} would you like to purchase?</span>
        <input type="text"/>
      </div>
    )
  }
}

export default TransactionForm
