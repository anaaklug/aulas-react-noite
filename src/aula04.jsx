import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula04 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
            source={require('../assets/icon.png')}
            style={ styles.icon }
        />

        <Image
            source={{ uri: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/10/2f95bc3406dc795ea2b1ce2258d5e52d.jpg?w=1600&h=900&fit=crop' }}
            style={ styles.icon }
        />

      </View>
    );
  }
}

export default Aula04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 150,
    height: 150,
  }

});