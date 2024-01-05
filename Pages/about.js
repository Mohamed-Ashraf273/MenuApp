import React from 'react';
import { StyleSheet, Button, SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 function App({menusections}) {
 
  return (
    <View style={styles.homecont}>
          <Text style={{color: '#17202A', fontWeight: 'bold',backgroundColor:'#E59866',paddingHorizontal: 20, paddingVertical: 10,marginBottom: 10,backgroundColor: '#E59866',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',fontSize: 16,marginLeft: 5, }}>
            Welcome to {menusections.restaurant_name} Menu{'\n'}
            Our Location: {menusections.location}{'\n'}
            Our team name: M3O2
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homecont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5CBA7',
    
  },
  
})
export default App;