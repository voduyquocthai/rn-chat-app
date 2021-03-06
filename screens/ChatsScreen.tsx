import * as React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';


export default function ChatsScreen() {
  return (
    
      <View >
      <FlatList 
      data={chatRooms} 
      renderItem={({item}) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}
      horizontal={false}
      />
      <NewMessageButton />
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
