import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/UI/HeaderButton";

const Stack = createStackNavigator();
const OrdersStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "#0059B3" : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : "#0059B3",
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
};

// Primary Shop Stack
const ShopNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen
        name="Products"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          title: "All Products",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  navigation.navigate("CartScreen");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

// Orders Stack
const OrdersNavigator = () => {
  return (
    <OrdersStack.Navigator screenOptions={navOptions}>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
    </OrdersStack.Navigator>
  );
};

//Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Products") {
            iconName = "ios-list";
          } else if (route.name === "Orders") {
            iconName = "ios-gift";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Products" component={ShopNavigator} />
      <Tab.Screen name="Orders" component={OrdersNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
