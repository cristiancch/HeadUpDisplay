import React from 'react';
/*
import MapView from 'react-native-maps';
*/
import {StyleSheet, View, Text} from 'react-native';

const LATITUDE_DELTA = 0.0421;
const LONGITUDE_DELTA = 0.0922;

export default class Location extends React.Component {

    constructor(props) {
        super(props);
        //  this.onRegionChange = this.onRegionChange.bind(this);
        this.state = {
            currentPosition: {
                latitude: 0,
                longitude: 0,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA,
                currentSpeed: null,
                altitude: null
            }
        }
    }

    watchID: ?number = null;

    componentDidMount() {

        /*navigator.geolocation.getCurrentPosition(position => {
            let lat = parseFloat(position.coords.latitude);
            let long = parseFloat(position.coords.longitude);
            let initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            };
            this.setState({
                region: initialRegion,
                currentSpeed: position.coords.speed < 0 ? 0 : position.coords.speed
            });
        }, {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 10000,
        }).skipPermissionRequests(true);*/

        this.watchID = navigator.geolocation.watchPosition((position) => {
            let lat = parseFloat(position.coords.latitude);
            let long = parseFloat(position.coords.longitude);
            let altitude = position.coords.altitude;

            let lastRegion = {
                latitude: lat,
                longitude: long,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA,
                currentSpeed: position.coords.speed < 0 ? 0 : position.coords.speed.toFixed(2),
                altitude: altitude.toFixed(2)
            };
            this.setState({currentPosition: lastRegion});
        });

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
        // clearInterval(this.interval);
    }

    /* onRegionChange(region) {
         this.setState({
             region: region,
             currentSpeed: region.coords.speed < 0 ? 0 : region.coords.speed
         });
     }*/

    render() {
        return (
            <View style={styles.container}>
                {/* <MapView
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                />*/}
                <Text style={styles.bigGreen}>{this.state.currentPosition.currentSpeed} m/s</Text>
                <Text style={styles.smallGreen}>Lat: {this.state.currentPosition.latitude}</Text>
                <Text style={styles.smallGreen}>Lon: {this.state.currentPosition.longitude}</Text>
                <Text style={styles.smallGreen}>Altitude: {this.state.currentPosition.altitude}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    /*  map: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'absolute'
      },*/
    bigGreen: {
        color: 'green',
        fontWeight: 'bold',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
    },
    smallGreen: {
        color: 'green',
        fontWeight: 'bold',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});