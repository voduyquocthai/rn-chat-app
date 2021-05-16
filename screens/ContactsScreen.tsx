import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';

import users from '../data/Users';


export default function Contacts() {
  return (
    
      <View >
      <FlatList 
      data={users} 
      renderItem={({item}) => <ContactListItem user={item}/>}
      keyExtractor={(item) => item.id}
      horizontal={false}
      />
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});
