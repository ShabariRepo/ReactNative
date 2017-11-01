import CardSection from './CardSection';
import Card from './Card';
import React from 'react';
import { Text } from 'react-native';

const AlbumDetail = (props) => {
    // grab the albums from album lsit
    return (
        <Card>
            <CardSection>
                <Text> {props.allAlbums.title} </Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
