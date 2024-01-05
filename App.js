import React from 'react';
import { StyleSheet, Button, SafeAreaView, Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ourmenu from '../menuapp/menu.json';
import AboutPage from '../menuapp/Pages/about';
import SectionsPage from '../menuapp/Pages/Menu/Sections';

function HomeScreen({ navigation }) {
  return (//https://th.bing.com/th/id/R.da2fb133ca227b068b2b70b39ebd1643?rik=lpLFFJCGLT4igA&pid=ImgRaw&r=0
    <ImageBackground style={styles.shome} source={{ uri: 'https://th.bing.com/th/id/R.650463f609138f6c59c85720847225ea?rik=oPOTUBx8ylm0qQ&pid=ImgRaw&r=0&sres=1&sresct=1' }}>
      <Text style={styles.logo}>{ourmenu.restaurant_name}</Text>
      <View style={styles.homecont}>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Sections')}>
          <Text style={{ fontSize: 16, color: '#17202A', fontWeight: 'bold' }}>Welcome to {ourmenu.restaurant_name} Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('About')}>
          <Text style={{ fontSize: 16, color: '#17202A', fontWeight: 'bold' }}>About Us</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Menu',
            headerStyle: {
              backgroundColor: '#17202A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22
            },
          }}
        />


        <Stack.Screen name="About" options={{
            title: 'About',
            headerStyle: {
              backgroundColor: '#E59866',
            },
            headerTintColor: '#17202A',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22
            },
          }}>
          {props => <AboutPage {...props} menusections={ourmenu} />}
        </Stack.Screen>

        
        <Stack.Screen name="Sections" options={{
            title: 'Sections',
            headerStyle: {
              backgroundColor: '#E59866',
            },
            headerTintColor: '#17202A',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22
            },
          }}>
          {props => <SectionsPage {...props} menusections={ourmenu.menu_sections} />}
        </Stack.Screen>


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  logo: {
    fontSize: 24,
    paddingTop: 100,
    fontStyle: 'italic',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  homecont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#D0D3D4',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default App;