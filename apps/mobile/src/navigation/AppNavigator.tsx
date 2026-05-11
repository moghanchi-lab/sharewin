import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Wallet, Compass, PlusSquare, BarChart3, User } from 'lucide-react-native';
import { COLORS } from '../theme';

import WalletScreen from '../screens/WalletScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CreateScreen from '../screens/CreateScreen';
import PerformanceScreen from '../screens/PerformanceScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,
        headerShown: true,
      }}
    >
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Wallet color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Compass color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={CreateScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <PlusSquare color={color} size={size} />,
          title: 'New Campaign'
        }}
      />
      <Tab.Screen 
        name="Performance" 
        component={PerformanceScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <BarChart3 color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const isAuthenticated = true; // Placeholder

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
