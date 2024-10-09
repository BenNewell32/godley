import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListScreen from './components/screens/ListScreen';
import HomeScreen from './components/screens/HomeScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import AddEventScreen from './components/screens/AddEventScreen';
import CalendarScreen from './components/screens/CalendarScreen';
import ChatScreen from './components/screens/ChatScreen';
import FriendsScreen from './components/screens/FriendsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="tune"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add Event"
          component={AddEventScreen}
          options={{
            tabBarLabel: 'Add Event',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="tooltip-plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="android-messages" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Friends"
          component={FriendsScreen}
          options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-group-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={ListScreen}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="party-popper" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
