import React from 'react';
import {
  View,
  Image,
  Text,
    FlatList, // here
} from 'react-native';
 
export default class Infi extends React.Component {

  state = {
    data: [],
    page:1, //here
    refreshing: false // here
  }

  _getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' + this.state.page;    
    fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({ 
        data: this.state.data.concat(data), // 기존 data에 추가.
        page: this.state.page + 1
      })
    });
  }

  componentDidMount() {
    this._getData();
  }

  _handleLoadMore = () => {
    this._getData();
  }

  _handleRefresh = () => {
    this.setState({
      refreshing: true,
      page: 1,
    }, this._getData);
  }

  _renderItem = ({item}) => (
    <View style={{borderBottomWidth:1, marginTop: 20}}>
      <Image source={{ uri: item.url }} style={{ height: 200}} />
      <Text>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <FlatList 
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => item.id}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={1}
        refreshing={this.state.refreshing}
        onRefresh={this._handleRefresh}
      />
    );
  }
}