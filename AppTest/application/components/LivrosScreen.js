import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, FlatList, StyleSheet, Button, Alert } from 'react-native';

export default class LivrosScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://10.0.2.2:50348/api/livro')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={STYLES.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={STYLES.item}>{rowData.nome}</Text>}
          renderFooter={() => <Button title="Delete" onPress={() => {}}/>}
        />
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
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
