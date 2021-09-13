// ./screens/Home.js

import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Button, Text, FlatList, StyleSheet, TouchableOpacity, Image,
  ActivityIndicator, StatusBar } from "react-native";

// import Infi from "../Infi.js";

const renderItem = ({ item }) => {
  return (
    <View>
      <View>
      <Text>user id: {item.userId}</Text>
      </View>
      <View>
        <Text>id: {item.id}</Text>
      </View>
      <View>
        <Text>title: {item.title}</Text>
      </View>
      <View>
        <Text>body: {item.body}</Text>
      </View>
    </View>
  );
};

const LIMIT = 1;


const Home = ({ navigation }) => { 

const [data, setData] = useState([]);
const [offset, setOffset] = useState(0);
const [loading, setLoading] = useState(false);
const [page] = useState(0);

// const page =  1

const getData = () => {
  setLoading(true);
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => setData(data.concat(res.slice(offset, offset + LIMIT))))
    .then(() => {
      setOffset(offset + LIMIT);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      Alert.alert("에러가 났습니다");
    });
};
  useEffect(() => {
    getData();
  }, []);

  const onEndReached = () => {
    if (loading) {
      return;
    } else {
      getData();
    }
  };
   return (
    // <View style={styles.center}>
    /* <Text>This is the home screen</Text>
     <TouchableOpacity 
      style={styles.button}
         onPress={() => navigation.navigate("About")}
      >
      <Text> Go To About Screen </Text>
    </TouchableOpacity>   */
    /* < Infi></Infi> */
    //  </View>
    <SafeAreaView style={styles.container}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
      ListFooterComponent={loading && <ActivityIndicator />}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    // flex : 1,
    backgroundColor: "#e91e63"
  },

container: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 12,
  marginHorizontal: 12,
  paddingVertical: 12,
  paddingHorizontal: 14,
  height: 400,
  shadowColor: '#f1f2f3',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 18.95,
  elevation: 1,
  zIndex: 1,
  backgroundColor: 'white',
  borderRadius: 12,
  borderColor: '#F2F3F4',
  borderWidth: 1,
},
});

export default Home;


