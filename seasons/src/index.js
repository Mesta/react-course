import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner'

class App extends React.Component {
  state = {
    errorMessage: null,
    latitude: null,
    longitude: null,
  }

  async componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (geolocation) => this.setState({
        latitude: geolocation.coords.latitude,
        longitude: geolocation.coords.longitude
      }),
      (error) => this.setState({ errorMessage: error.message }))
  }

  renderContent () {
    if (this.state.errorMessage) {
      return (<div>Error: {this.state.errorMessage}</div>)
    }

    if (this.state.latitude && this.state.longitude) {
      return (
        <SeasonDisplay
          latitude={this.state.latitude}
        />
      )
    }

    return (<Spinner message="Please accept location request."/>)
  }

  render () {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

export default App
