import React from 'react';
import ReactDOM from 'react-dom';
import School from './School'

class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
        <School />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
)