import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { HomeScreen } from './src/presentation/views/home/Home';
import { RegisterScreen } from './src/presentation/views/register/Register';
import { ProfileInfoScreen } from './src/presentation/views/profile/info/ProfileInfo';
import { MapScreen } from './src/presentation/views/map/MapScreen';
import { RoutesScreen } from './src/presentation/views/routes/RoutesScreen';
import { AlertsScreen } from './src/presentation/views/alerts/AlertsScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  Mapa: undefined;
  Rutas: undefined;
  Alertas: undefined;
  Perfil: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0D9488',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
      }}
    >
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🗺️</Text>,
        }}
      />
      <Tab.Screen
        name="Rutas"
        component={RoutesScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🚌</Text>,
        }}
      />
      <Tab.Screen
        name="Alertas"
        component={AlertsScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🔔</Text>,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileInfoScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Registro TransFunza',
            headerStyle: { backgroundColor: '#0D9488' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;