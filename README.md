# React-Native Ecommerce App :bomb:
# Hi, I am Priyank Patel! 👋

## setup

- clone the repo `git clone`
- install all dependencies `npm install`
- run the app `expo start`

[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://expo.io/@ace26/projects/react-native-fashion) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo) [![supports web](https://img.shields.io/badge/Platforms-Web-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo)

## Features
- authentication screen to log in or sign up.
- shop to see all products and product details.
- cart to add/remove products and order them.
- orders screen to retrieve orders.
- user admin to create, update and delete products.

## React Navigation
- handling stack of screens for products, orders and user admin with createStackNavigator and createAppContainer.
- using props.navigation to navigate between screens.
- handling data from component to header with setParams and getParam.
- custom header title with navigationOptions.
- custom cart button in the header with react-navigation-header-buttons.
- custom SideDrawer with react-navigation-drawer.

## Redux and React-Redux
- using actions and reducers to authenticate and to store data (token and user ID, products, cart, orders).
- using useSelector hook to get the state.
- using props.navigation to pass data to the header without re-render.
- using useDispatch hook to dispatch actions. 
- passing useDispatch to the header with useEffect and useCallback to limit re-render cycles.
- handling logic for the cart (quantity, removing a product and clearing the cart).
- debugging with redux-devtools-extension and React Native debugger.

## React Native
- using FlatList, ScrollView, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Alert, AsyncStorage and SafeAreaView.
- custom reusable components (Card, HeaderButton, Input).
- custom fonts, color and environment constants.
- using React hooks (useState, useEffect, useCallback, useReducer, useRef).
- handling input validation with useReducer and custom TextInput component.
- handling dates with Moment.js.
- handling sessions with AsyncStorage, setItem and getItem.


