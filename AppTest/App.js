import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  SectionList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieScreen from './application/components/MovieScreen';
import LivrosScreen from './application/components/LivrosScreen';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => navigate('List')}
          title="List View"
        />
        <Button
          onPress={() => navigate('Movies')}
          title="Movies"
        />
        <Button
          onPress={() => navigate('Livros')}
          title="Livros"
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class ListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `List View`
  });

  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const AppTest = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  List: { screen: ListScreen },
  Movies: { screen: MovieScreen },
  Livros: { screen: LivrosScreen }
});

AppRegistry.registerComponent('AppTest', () => AppTest);
