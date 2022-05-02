import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import logo from './assets/logo.png';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{
        width: width * .7, height: (width * .7) / 2, resizeMode: "contain",
      }} />
      <View style={{ height: height * 0.1 }}></View>
      <Text style={{ fontSize: width * 0.07, fontWeight: '600', textAlign: 'center' }}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.2
  },
});

export default App;