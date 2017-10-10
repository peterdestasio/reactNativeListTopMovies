import React, { Component } from 'react';
import {
    Image,              // Renders background image
    StyleSheet,         // CSS-like styles
    Text,               // Renders text
    TouchableOpacity,   // Handles row presses
    View                // Container component
} from 'react-native';
import Dimensions from 'Dimensions';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class Row extends Component {

    render({ movie, onPress } = this.props) {

        const { title, rating, image } = movie;
        return (

            <TouchableOpacity
                style={styles.row}
                onPress={onPress}
                activeOpacity={0.7}
            >

    <Image source={{ uri: image }} style={styles.imageBackground}>
        <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
        <View style={styles.rating}>
            <Image
                source={{ uri: 'https://staticv2.rottentomatoes.com/static/images/icons/cf-lg.png' }}
                style={styles.icon}
            />

            <Text style={[styles.text, styles.value]}>{rating}%</Text>
        </View>

    </Image>
                        </TouchableOpacity >
            
        );
    }

}



const styles = StyleSheet.create({

    row: {
        paddingBottom: 4,
    },

    imageBackground: {
        height: screen.height / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        backgroundColor: 'transparent',
        fontFamily: 'Avenir',
        fontWeight: 'bold',

        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },

    title: {
        fontSize: 22,
    },

    rating: {
        flexDirection: 'row',
    },

    icon: {
        width: 22,
        height: 22,
        marginRight: 5,
    },

    value: {
        fontSize: 16,
    },



});