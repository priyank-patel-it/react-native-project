// import React, { useCallback, useEffect, useReducer } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Platform,
//   Alert,
// } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { useSelector, useDispatch } from "react-redux";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import HeaderButton from "../../components/UI/HeaderButton";
// import * as productsActions from "../../store/actions/products";

// const FORM_INPUT_UPDATE = "UPDATE";

// // Building this reducer outside of the component to save from rebuilding each time
// // Can build inside the reducer if need to use props but better performance outside the reducer
// const formReducer = (state, action) => {
//   if (action.type === FORM_INPUT_UPDATE) {
//     const updatedValues = {
//       ...state.inputValues,
//       [action.input]: action.value,
//     };
//     const updatedValidities = {
//       ...state.inputValidities,
//       [action.input]: action.isValid,
//     };
//     let updatedFormIsValid = true;
//     for (const key in updatedValidities) {
//       updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
//     }
//     return {
//       formIsValid: updatedFormIsValid,
//       inputValidities: updatedValidities,
//       inputValues: updatedValues,
//     };
//   }
//   return state;
// };

// const EditProductScreen = (props) => {
//   const prodId = props.route.params ? props.route.params.productId : "";
//   const editedProduct = useSelector((state) =>
//     state.products.userProducts.find((prod) => prod.id === prodId)
//   );
//   const dispatch = useDispatch();
//   // Form handler
//   const [formState, dispatchFormState] = useReducer(formReducer, {
//     inputValues: {
//       title: editedProduct ? editedProduct.title : "",
//       imageUrl: editedProduct ? editedProduct.imageUrl : "",
//       description: editedProduct ? editedProduct.description : "",
//       price: "",
//     },
//     inputValidities: {
//       title: editedProduct ? true : false,
//       imageUrl: editedProduct ? true : false,
//       description: editedProduct ? true : false,
//       price: editedProduct ? true : false,
//     },
//     formIsValid: editedProduct ? true : false,
//   });

//   const submitHandler = useCallback(() => {
//     if (!formState.formIsValid) {
//       Alert.alert(`Wrong Input!`, `Please check the errors in the form.`, [
//         { text: "OK" },
//       ]);
//       return;
//     }

//     if (editedProduct) {
//       dispatch(
//         productsActions.updateProduct(
//           prodId,
//           formState.inputValues.title,
//           formState.inputValues.description,
//           formState.inputValues.imageUrl
//         )
//       );
//     } else {
//       dispatch(
//         productsActions.createProduct(
//           formState.inputValues.title,
//           formState.inputValues.description,
//           formState.inputValues.imageUrl,
//           +formState.inputValues.price
//         )
//       );
//     }
//     props.navigation.goBack();
//   }, [dispatch, prodId, formState]);

//   useEffect(() => {
//     props.navigation.setOptions({
//       headerRight: () => (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item
//             title="Save"
//             iconName={
//               Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
//             }
//             onPress={submitHandler}
//           />
//         </HeaderButtons>
//       ),
//     });
//   }, [submitHandler]);

//   const textChangeHandler = (inputIdentifier, text) => {
//     let isValid = false;

//     if (text.trim().length > 0) {
//       isValid = true;
//     }
//     dispatchFormState({
//       type: FORM_INPUT_UPDATE,
//       value: text,
//       isValid: isValid,
//       input: inputIdentifier,
//     });
//   };

//   return (
//     <ScrollView>
//       <View style={styles.form}>
//         <View style={styles.formControl}>
//           <Text style={styles.label}>Title</Text>
//           <TextInput
//             style={styles.input}
//             value={formState.inputValues.title}
//             onChangeText={textChangeHandler.bind(this, "title")}
//             keyboardType="default"
//             autoCorrect
//             autoCapitalize="sentences"
//             returnKeyType="next"
//           />
//         </View>
//         {!formState.inputValidities.title && (
//           <Text>Please enter a valid title!</Text>
//         )}
//         <View style={styles.formControl}>
//           <Text style={styles.label}>Image Url</Text>
//           <TextInput
//             style={styles.input}
//             value={formState.inputValues.imageUrl}
//             onChangeText={textChangeHandler.bind(this, "imageUrl")}
//           />
//         </View>
//         {editedProduct ? null : (
//           <View style={styles.formControl}>
//             <Text style={styles.label}>Price</Text>
//             <TextInput
//               style={styles.input}
//               value={formState.inputValues.price}
//               onChangeText={textChangeHandler.bind(this, "price")}
//               keyboardType="decimal-pad"
//             />
//           </View>
//         )}
//         <View style={styles.formControl}>
//           <Text style={styles.label}>Description</Text>
//           <TextInput
//             style={styles.input}
//             value={formState.inputValues.description}
//             onChangeText={textChangeHandler.bind(this, "description")}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   form: {
//     margin: 20,
//   },
//   formControl: {
//     width: "100%",
//   },
//   label: {
//     fontFamily: "open-sans-bold",
//     marginVertical: 8,
//   },
//   input: {
//     paddingHorizontal: 2,
//     paddingVertical: 5,
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//   },
// });

// export default EditProductScreen;
