import React from 'react';
import {Card, Paragraph, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
const ContactCard = ({item, editPress, deletePress}) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={item.firstName} />
      <Card.Content>
        <Paragraph>{`${item.firstName} ${item.lastName}`}</Paragraph>
        <Paragraph>Age {item.age}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: item.photo}} style={styles.cover} />
      <Card.Actions>
        <Button onPress={editPress}>Edit</Button>
        <Button onPress={deletePress}>Delete</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: '5%',
  },
  cover: {
    borderRadius: 10,
  }
});
export default ContactCard;
