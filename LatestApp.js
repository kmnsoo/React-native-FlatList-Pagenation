import * as React from 'react';
import 'react-native-gesture-handler' ; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  Button,StyleSheet, Text,  View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}

      </View>
    );
  }
  
  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  function AnythingScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> AnythingScreen</Text>
      </View>
    );
  }

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Anything" component={AnythingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});


export default App;
