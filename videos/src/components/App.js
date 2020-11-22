import React from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import { searchVideos } from '../apis/youtube'

export default class App extends React.Component {
  state = {
    selectedVideo: null,
    videos: [],
  }

  componentDidMount () {
    this.onTermSubmit('')
  }

  onTermSubmit = async (term) => {
    const videos = await searchVideos(term)
    this.setState({ videos, selectedVideo: videos[0] })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render () {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} style={{ margin: '10px' }}/>

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
