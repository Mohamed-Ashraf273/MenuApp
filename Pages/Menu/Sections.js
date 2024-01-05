import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App({ menusections }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible1, setIsVisible1] = useState(false);
  const [btnprsd, setBtnprsd] = useState([]);
  const [btnprsd1, setBtnprsd1] = useState([]);

  let displayView1 = (
    <View style={styles.homecont}>
      {
        menusections.map((menusection) => (
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              setIsVisible(false);
              setIsVisible1(true);
              setBtnprsd(menusection.dishes);
              setBtnprsd1(menusection.section_name);
            }}
            key={menusection.section_name}>
            <Text style={styles.sectionName}>{menusection.section_name}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
  let displayView = (
    <View style={styles.newhomecont}>
      <ScrollView>
      <View style={styles.back}>
        <Text style={styles.sectionName}>{btnprsd1}</Text>
      </View>
        {btnprsd.map((btnprsds) => (
          <View style={styles.mnutext} key={btnprsds.dish_name}>
            <Image style={styles.img} source={{ uri: btnprsds.image_url }} />
            <Text style={styles.dishName}>Dish Name: {btnprsds.dish_name}</Text>
            <Text style={styles.description}>Description: {btnprsds.description}</Text>
            <Text style={styles.price}>Price: {btnprsds.price}$</Text>
            <Text style={styles.rating}>Rating: {btnprsds.rating}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.back} onPress={() => {
              setIsVisible(true);
              setIsVisible1(false);
            }}>
          <Text style={styles.sectionName}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.homecont}>
      {isVisible ? (isVisible1 ? displayView : displayView1) : displayView}
    </View>
  );
  
}
const styles = StyleSheet.create({
  sectionNameTop:{
    borderRadius: 10,
    backgroundColor: '#E59866',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    marginBottom: 10,
    paddingHorizontal: 20,    
  },
  back:{
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#E59866',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    flex: 1
  },
  mnutext: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#E59866',
    alignItems: 'center',
  },
  newhomecont: {
    flex: 1,
    backgroundColor: '#F5CBA7',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  img: {
    width: 160,
    height: 120,
    marginBottom: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    marginBottom: 5,
  },
  homecont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5CBA7',
  },
  buttons: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#E59866',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionName: {
    fontSize: 16,
    color: '#17202A',
    fontWeight: 'bold',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1
  },
});