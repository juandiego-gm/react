import React from "react";
import {Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "./components/home/Menu";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListComponent from "./components/list/List";
import NombreComponent from "./components/nombre/Nombre";
import ChatComponent from "./components/chat/chat";

const Tab = createBottomTabNavigator()

const navigation = () => {
  return(
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Menu} options={{
              tabBarLabel: "Home",
          }}>
          </Tab.Screen>
          <Tab.Screen name="List" component={ListComponent} options={{
              tabBarLabel: "Listado",
          }}>
          </Tab.Screen>
          <Tab.Screen name="Nombre" component={NombreComponent} options={{
              tabBarLabel: "Nombre",
          }}>
          </Tab.Screen>
          <Tab.Screen name="Chat" component={ChatComponent} options={{
              tabBarLabel: "Chat",
          }}>
          </Tab.Screen>
      </Tab.Navigator>
  )
}

export default navigation