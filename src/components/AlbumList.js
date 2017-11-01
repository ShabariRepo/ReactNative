// import libraries for making a component
import AlbumDetail from './AlbumDetail';
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // empty state
    state = { albums: [] };

    // anytime the component is about to be rendered to screen this method will be called as a hook
    componentWillMount() {
        // then will be called after the promise is returned from get async
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    // helper method to generate album details for each album
    renderAlbums() {
        // map is an array helper arrow function and inside and called 5 timnes, 
        //and for each it will be entered into a new array
        // whenever we want to represent a JS variable or function
        // in JSX it should be in {} or it will think its just text
        // in this case the key is the title
        // but in real apps its the id
        // pass the albums to the child using prop
        // self closing element end with />
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} allAlbums={album} />
        );
    }

    // must put render in class based component
    render() {
        console.log(this.state);

        return (
            <View>
                    {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
