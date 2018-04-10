import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'

const b = '??'

const ff = () => {
  console.log(b)
}

class App extends PureComponent {
  render () {
    return (
      <div className="classic_theme_container">
        hello world!?..?...
      </div>
    )
  }
}

export default hot(module)(App)
