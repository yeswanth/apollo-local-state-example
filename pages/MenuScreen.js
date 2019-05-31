import React from "react";
import { View, Button, Text } from "react-native";
import ItemCard from "../components/ItemCard";
class MenuScreen extends React.Component {
  goToCartScreen = () => {
    this.props.navigation.navigate("CartScreen");
  };

  render() {
    return (
      <View>
        <Text>MenuScreen</Text>
        <ItemCard />
        <Button onPress={this.goToCartScreen} title="Go to Next Screen" />
      </View>
    );
  }
}

export default MenuScreen;
