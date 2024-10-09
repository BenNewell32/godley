import React from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

const ListScreen = () => {
  // Shared value for parallax scroll effect
  const scrollY = useSharedValue(0);

  // Parallax effect for the background image
  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: scrollY.value * 0.5 }], // Moves slower than scroll
    };
  });

  // Scroll event listener to update shared value
  const onScroll = (event) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  return (
    <View style={styles.container}>
      {/* Parallax Background Image */}
      <Animated.View style={[styles.backgroundContainer, animatedBackgroundStyle]}>
        <Image       source={require('../../assets/snack-icon.png')}
 style={styles.backgroundImage} />
      </Animated.View>

      {/* Foreground: Calendar and Interactions */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <Text style={styles.title}>Your Calendar</Text>

        {/* Calendar Cards */}
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index} style={styles.card}>
            <Card.Title title={`Event for ${index + 1} October`} subtitle={`Details for event ${index + 1}`} />
            <Card.Content>
              <Text>Time: 10:00 AM - 11:00 AM</Text>
              <Text>Location: Zoom</Text>
            </Card.Content>
            <Card.Actions>
              <Button>View</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.5, // Half screen height
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingTop: height * 0.5, // Start below the background image
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default ListScreen;
