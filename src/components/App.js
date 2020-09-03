import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class Counter extends Component {

  // constructorの働きは、reducerでやるので不要
  // 処理はActionCreatorで処理の名称を確保して、そのActionCreatorでrecducer内で適切な処理
  render() {
    const props = this.props;

    return (
    <React.Fragment>
      <div>value: { props.value }</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
      <div>value: { props.test }</div>
    </React.Fragment>
    )
  }
}

// 値をマッピング
const mapStateToProps = (state) => ({ value: state.count.value, test: state.count.test })

// ディスパッチ
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

