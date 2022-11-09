import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Fretes from './screens/Fretes';
import Servicos from './screens/Servicos';
import Home from './screens/Home';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            )}}/>
        <Tab.Screen name="Fretes" component={Fretes} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="truck-delivery" size={24} color="black" />
            )}}/>
        <Tab.Screen name="Servicos" component={Servicos} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="card-multiple" size={24} color="black" />
            )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

