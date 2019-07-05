import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('surfing');
    }

    //Callback function//
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]

        });
    };

    //Since callback define as a arrow function - (video) is what we fetch from api//

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };



    //Pass a reference from callback to video list a prop//
    //onFormSubmit and onVideoSubmit are props - can be any name//

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"> <VideoDetail video={this.state.selectedVideo} /></div>
                        <div className="five wide column"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /></div>

                    </div>
                </div>
                <div className="ui grid">
                    <div className="ui row">

                    </div>
                </div>
            </div>

        );
    }
}

export default App;