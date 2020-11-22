import ImageList from './ImageList'
import React from 'react'
import SearchBar from './SearchBar'
import { searchImageByTerm } from '../api/unsplash'

class App extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    const images = await searchImageByTerm(term)
    this.setState({ images })
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>)
  }
}

export default App
