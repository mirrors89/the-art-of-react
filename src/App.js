import React, { Component } from 'react'
// import MyComponent from './MyComponent'
// import EventPractice from './EventPractice/EventPractice';
// import ValidationSample from './ValidationSample/ValidationSample'
// import ScrollBox from './ScrollBox/ScrollBox'

// import IterationSample from './IterationSample/IterationSample'
import LifeCycleSample from './LifeCycleSample/LifeCycleSample'


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      // <ValidationSample />
      // <EventPractice />
      // <MyComponent name="React" age={30} />

      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox = ref} />
      //   <button onClick={() => this.scrollBox.scrolToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>

      // <IterationSample />
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>

    )
  }
}

export default App
