import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';
import theme from '../styles/theme';
import { formatter } from '../utils/PriceFormatter';

class ListItem extends Component {
  onPress = () => {
    this.props.onPressItem();
  };

  render() {
    const { thumbnail_url, price: priceFormatted, short_description: title } = this.props.item;
    const { rowContainer, thumb, textContainer, price, subtitle } = styles;

    return (
      <TouchableHighlight onPress={this.onPress} underlayColor="#dddddd">
        <View style={rowContainer}>
          <Image style={thumb} source={{ uri: thumbnail_url }} />
          <View style={textContainer}>
            <Text style={price}>{formatter.format(priceFormatted)}</Text>
            <Text style={subtitle} numberOfLines={1}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  price: {
    fontSize: theme.FONT_SIZE_XLARGE,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.FONT_COLOR
  }
});

export default ListItem;
