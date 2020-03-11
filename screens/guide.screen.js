import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuideScreen = () => {
    return ( 
        <View style={styles.screen}>
            <Text>Guide Screen</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default GuideScreen;