import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Text, Title, Divider, Avatar } from 'react-native-paper';

// Mock Data for the Event
const event = {
  title: 'Bachelorette Party',
  city: 'Las Vegas',
  subEvents: [
    {
      time: '12:00 PM',
      name: 'Brunch at the Plaza',
      likes: 0,
      dislikes: 0,
      voters: [
        { name: 'Alice', profilePic: 'https://example.com/alice.jpg', vote: 'like' },
        { name: 'Bob', profilePic: 'https://example.com/bob.jpg', vote: 'dislike' }
      ]
    },
    {
      time: '2:00 PM',
      name: 'Spa and Relaxation',
      likes: 0,
      dislikes: 0,
      voters: [
        { name: 'Claire', profilePic: 'https://example.com/claire.jpg', vote: 'like' },
        { name: 'David', profilePic: 'https://example.com/david.jpg', vote: 'dislike' }
      ]
    },
    {
      time: '4:00 PM',
      name: 'Shopping at Fashion Show Mall',
      likes: 0,
      dislikes: 0,
      voters: [
        { name: 'Eva', profilePic: 'https://example.com/eva.jpg', vote: 'like' }
      ]
    },
    {
      time: '7:00 PM',
      name: 'Dinner at Tao',
      likes: 0,
      dislikes: 0,
      voters: [
        { name: 'Frank', profilePic: 'https://example.com/frank.jpg', vote: 'dislike' }
      ]
    },
    {
      time: '10:00 PM',
      name: 'Night Club at Omnia',
      likes: 0,
      dislikes: 0,
      voters: [
        { name: 'Grace', profilePic: 'https://example.com/grace.jpg', vote: 'like' }
      ]
    }
  ]
};

const AddEventScreen = () => {
  const [subEvents, setSubEvents] = useState(event.subEvents);

  // Handle Vote (Like or Dislike)
  const handleVote = (index, type) => {
    const updatedSubEvents = [...subEvents];
    if (type === 'like') {
      updatedSubEvents[index].likes += 1;
    } else {
      updatedSubEvents[index].dislikes += 1;
    }
    setSubEvents(updatedSubEvents);
  };

  // Function to render voters based on their choice (like or dislike)
  const renderVoters = (voters, voteType) => {
    return voters
      .filter((voter) => voter.vote === voteType)
      .map((voter, index) => (
        <Avatar.Image
          key={index}
          size={30}
          source={{ uri: voter.profilePic }}
          style={styles.avatar}
        />
      ));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Event Title and City */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{event.title}</Title>
          <Text style={styles.subtitle}>City: {event.city}</Text>
        </Card.Content>
      </Card>

      <Divider style={styles.divider} />

      {/* Sub-events with Voting */}
      {subEvents.map((subEvent, index) => (
        <View key={index} style={styles.subEventContainer}>
          <Text style={styles.subEventTime}>{subEvent.time}</Text>
          <Text style={styles.subEventName}>{subEvent.name}</Text>

          {/* Vote Buttons */}
          <View style={styles.voteContainer}>
            <View style={styles.voteSection}>
              <Button
                mode="contained"
                icon="thumb-up"
                onPress={() => handleVote(index, 'like')}
                style={styles.voteButton}
              >
                Like {subEvent.likes}
              </Button>
              <View style={styles.votersContainer}>
                {renderVoters(subEvent.voters, 'like')}
              </View>
            </View>

            <View style={styles.voteSection}>
              <Button
                mode="contained"
                icon="thumb-down"
                onPress={() => handleVote(index, 'dislike')}
                style={styles.voteButton}
              >
                Dislike {subEvent.dislikes}
              </Button>
              <View style={styles.votersContainer}>
                {renderVoters(subEvent.voters, 'dislike')}
              </View>
            </View>
          </View>

          <Divider style={styles.subEventDivider} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  divider: {
    marginVertical: 20,
    backgroundColor: '#ccc',
  },
  subEventContainer: {
    marginBottom: 20,
  },
  subEventTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subEventName: {
    fontSize: 18,
    marginVertical: 10,
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  voteSection: {
    flex: 1,
  },
  voteButton: {
    marginBottom: 10,
  },
  votersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    marginRight: 5,
    marginBottom: 5,
  },
  subEventDivider: {
    marginVertical: 15,
    backgroundColor: '#ddd',
  },
});

export default AddEventScreen;
