import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import ShowSpeed from './src/js/Components/ShowSpeed';
import MapView from 'react-native-maps';
import Location from './src/js/Components/Location';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Location/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    }
});
