import React from "react";
import { View, Button, Text } from "react-native";
import ItemCard from "../components/ItemCard";

class CartScreen extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <Text>CartScreen</Text>
        <ItemCard />
      </View>
    );
  }
}

export default CartScreen;
