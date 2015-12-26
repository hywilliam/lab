/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} = React;

var GithubFinder = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text>
                    This is my first custom view!
                </Text>
                <Image
                    source={{uri: 'http://7xihsv.com1.z0.glb.clouddn.com/1.jpg'}}
                    style={styles.customing}>
                </Image>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    customing: {
        width: 200,
        height: 200
    }
});

AppRegistry.registerComponent('GithubFinder', () => GithubFinder);
