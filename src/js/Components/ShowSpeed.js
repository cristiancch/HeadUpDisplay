import React from 'react';
import {Text, View, StyleSheet,} from 'react-native';

export default class ShowSpeed extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            speed: 0
        };

        /* setInterval(() => {
             let newSpeed = this.state.speed + 1;
             this.setState(
                 {speed: newSpeed}
             )
         }, 3000);*/
    }

    render() {
        console.log("Speed received in ShowSpeed is " + this.props.nowSpeed);
        return (
            <View style={styles.container}>
                <Text style={styles.bigGreen}>{speed}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigGreen: {
        color: 'green',
        fontWeight: 'bold',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 260,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});