import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from '../screens/AdminScreen';
import StudentScreen from '../screens/StudentScreen';
import CompanyScreen from '../screens/CompanyScreen';
import WorkersScreen from '../screens/Workers';
import JobsScreen from '../screens/Jobs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#01ab9d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
         <Stack.Screen name="Jobs" component={JobsScreen} options={{ header: () => null }} />
      <Stack.Screen name="Workers" component={WorkersScreen} options={{ header: () => null }} />
     
      <Stack.Screen name="Student" component={StudentScreen}
        options={{
          title: 'Add Students',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#01ab9d" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }} />
      <Stack.Screen name="Company" component={CompanyScreen}
        options={{
          title: 'Add Jobs',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#01ab9d" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }} />
      <Stack.Screen name="Admin" component={AdminScreen} />

    </Stack.Navigator>
  );
}

export default AppStack;