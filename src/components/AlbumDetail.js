import Button from './Button';
import CardSection from './CardSection';
import Card from './Card';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

const AlbumDetail = ({ allAlbums }) => {

    // deconstruct the arguments since we are calling many options of props.albums...
    // can also do this in the arguments itself by declaring an object allAlbums = { title: .. }
    const { title, artist, thumbnail_image, image, url } = allAlbums;

    // the below is optional doing this you can just call thumbnailStyle in style=
    // instead of saying styles. ...
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        albumImageStyle
    } = styles;

    // grab the albums from album lsit
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    {/* images wont just fit the space given to it, have to manually add this in styling */}
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={albumImageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                {/* the below whenPressed prop is arbitrary not a specific prop 
                    can also add the text with another prop like text="Buy"*/}
                <Button whenPressed={() => Linking.openURL(url)}>
                    Buy
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },    
    albumImageStyle: {
        // image width will be automatic
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    }
}

export default AlbumDetail;
