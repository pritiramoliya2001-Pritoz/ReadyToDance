import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import EventScreen from '../components/EventScreen';
import FavouritesScreen from '../components/FavouritesScreen';
import ProfileScreen from '../components/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#21D393', // Pliē Brand Green
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === 'Search') iconName = 'search';
          else if (route.name === 'Events') iconName = 'calendar';
          else if (route.name === 'Favourites') iconName = focused ? 'heart' : 'heart-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Search" component={EventScreen} />
      <Tab.Screen name="Events" component={EventScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;