// Import necessary libraries
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// Styled components for cleaner and reusable design
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  opacity: 0.9;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #4CAF50;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const ErrorText = styled.Text`
  color: red;
  margin-bottom: 20px;
`;

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please enter all fields');
    } else {
      // Handle login logic here
      setError('');
      Alert.alert('Success', 'Logged in successfully');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/snack-icon.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <Container>
        <Title>Login</Title>
        
        {error ? <ErrorText>{error}</ErrorText> : null}
        
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Container>
    </ImageBackground>
  );
};

// Styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
