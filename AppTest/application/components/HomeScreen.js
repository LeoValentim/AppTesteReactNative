import React, { Component } from 'react';
import { Text, Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text>My Profile</Text>
    );
  }
}
