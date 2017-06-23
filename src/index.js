import _ from 'lodash';
import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCwVr_w7x4Fqy8BhmW9qfMOM0WMb7xpNoo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('ReactJS');
        
    }

    videoSearch(term) {
        YTSearch({
                key: API_KEY,
                term: term
            }, (videos) => {
                this.setState({ 
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return ( <div className="centerText">
            <h1>Video Search</h1>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} 
            />
            </div>
        );
    }
}

ReactDOM.render( <App /> , document.querySelector('.container'));