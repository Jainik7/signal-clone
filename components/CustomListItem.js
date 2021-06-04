import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar 
      rounded
      source={{
        uri:
         "https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg",
      }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Jainik Gada
        </ListItem.Title>
        <ListItem.Subtitle 
        numberOfLines={1} 
        ellipsizeMode="tail">
          Test Subtitle
    
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
