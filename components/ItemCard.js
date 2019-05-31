import React from "react";
import { View, Text, Button } from "react-native";
import { withApollo, Query } from "react-apollo";
import { addItemToCart, GET_ITEM_QUANTIY } from "../cartUtils";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onAdd = () => {
    console.log("onAdd");
    addItemToCart(this.props.client, 1);
  };

  onRemove = () => {
    console.log("onRemove");
    addItemToCart(this.props.client, -1);
  };

  renderCard =(data,client) => {
      return (<View>
        <Text> ItemCard</Text>
        <Text>Quantity: {data.quantity}</Text>
        <View>
          <Button title="+" onPress={this.onAdd} />
          <Button title="-" onPress={this.onRemove} />
        </View>
      </View>)
  }

  render() {
    return (
      <Query query={GET_ITEM_QUANTIY}>
        {({data,client,error}) => this.renderCard(data,client,error)}
      </Query>
    );
  }
}

export default withApollo(ItemCard);
