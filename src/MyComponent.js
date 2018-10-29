// @flow
import React, { Component } from 'react'

type Props = {
  name?: string,
  age: number,
};

type State = {
  number: number,
};

class MyComponent extends Component<Props, State> {
  static defaultProps = {
    name: "기본이름", // ...but we have a default prop for foo.
  };

  state = {
    number: 0
  }

  render() {
    return (
      <div>
        <p>나의 새롭고 멋진 {this.props.name} 컴포넌트</p>
        <p>저는 {this.props.age}살 입니다.</p>
        <p>숫자 : {this.state.number}</p>
        <button onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
        }}>더하기</button>
      </div>
    )
  }
}

export default MyComponent