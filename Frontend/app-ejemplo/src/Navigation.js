import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "./components/home/Menu";
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
          <Tab.Screen name="OpenAI" component={ChatComponent} options={{
              tabBarLabel: "OpenAI",
          }}>
          </Tab.Screen>
      </Tab.Navigator>
  )
}

export default navigation