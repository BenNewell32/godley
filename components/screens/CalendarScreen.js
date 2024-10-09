import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styled from 'styled-components/native';

// Styled component for selected date display
const SelectedDateContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const SelectedDateText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Date</Text>
      <Calendar
        // Handler which gets executed on day press
        onDayPress={handleDayPress}
        // Initially visible month. Default = Date()
        current={new Date().toISOString().split('T')[0]}
        // Marking selected date with a different style
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#00adf5',
          },
        }}
        // Theme customization
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          todayTextColor: '#00adf5',
          arrowColor: 'blue',
        }}
      />

      {selectedDate ? (
        <SelectedDateContainer>
          <SelectedDateText>Selected Date: {selectedDate}</SelectedDateText>
        </SelectedDateContainer>
      ) : null}
    </View>
  );
};

// Basic styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
});

export default CalendarScreen;
