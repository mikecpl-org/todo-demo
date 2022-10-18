import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import TabNavigator from './TabNavigator';
import PaymentModalScreen from '../screens/PaymentModalScreen';
import PaymentFormModalScreen from '../screens/PaymentFormModal';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Group screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      ) : (
        <>
          <Stack.Group screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Tab" component={TabNavigator} />
          </Stack.Group>
          <Stack.Group screenOptions={{
            headerShown: false,
            presentation: "modal"
          }}>
            <Stack.Screen name="PaymentModal" component={PaymentModalScreen} />
            <Stack.Screen name="PaymentFormModal" component={PaymentFormModalScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation;