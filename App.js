import React, { Component } from 'react';
import {
    Navigator,
    StatusBar,
    Text
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import List from './List';
import Movie from './Movie';

const RouteMapper = (route, navigationOperations, onComponentRef) => {
    if (route.name === 'list') {
        return (
            <List navigator={navigationOperations} />
        );
    } else if (route.name === 'movie') {
        return (
            <Movie
                movie={route.movie}
                navigator={navigationOperations}
            />
        );

    }
};

export default class App extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
    }
    render() {
        return (
            <NavigationExperimental.Navigator

                initialRoute={{ name: 'list' }}

                configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}

                renderScene={RouteMapper}
            />
        );

    }


}