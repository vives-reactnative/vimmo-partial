import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Image
} from 'react-native';
import theme from '../styles/theme';
import VimmoButton from '../components/VimmoButton';
import Warning from '../components/Warning';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'London',
      isLoading: false,
      message: ''
    };
  }

  onSearchPressed() {
    // toon spinner
    this.setState({ isLoading: true });
    // oproepen van Nestoria API
    // bij succesvol =>
    // resultaat afhandelen
    // controle op application_response_code
    // navigeren naar ResultList scherm met lijst van resultaten
    // bij fout =>
    // tonen van warning met foutbooschap
    // verberg spinner
    this.setState({ isLoading: true });
  }

  render() {
    const spinner = this.state.isLoading ? (
      <View style={{ marginTop: 20 }}>
        <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
      </View>
    ) : null;

    const {
      container,
      paragragh,
      flowHorizontal,
      leftContainer,
      searchInput,
      rightContainer,
      bottom
    } = styles;
    const { searchString, message } = this.state;

    return (
      <View style={container}>
        <Text style={[paragragh, { fontSize: theme.FONT_SIZE_XLARGE }]}>
          Ga op huizenjacht!
        </Text>
        <Text style={paragragh}>Geef een plaatsnaam (GB) op en zoek.</Text>
        <View style={flowHorizontal}>
          <View style={leftContainer}>
            <TextInput
              style={searchInput}
              placeholder="Geef een plaatsnaam op"
              value={searchString}
              onChangeText={text => this.setState({ searchString: text })}
            />
          </View>
          <View style={rightContainer}>
            <VimmoButton
              onPressed={() => {
                console.log('Nog te implementeren');
              }}
            >
              Zoek
            </VimmoButton>
          </View>
        </View>
        {spinner}

        <Warning>{message}</Warning>

        <View style={bottom}>
          <Image
            style={{ height: 300 }}
            // eslint-disable-next-line global-require
            source={require('../../assets/home.jpg')}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 65,
    alignItems: 'center',
    flex: 1
  },
  paragragh: {
    marginBottom: 20,
    fontSize: theme.FONT_SIZE,
    color: theme.FONT_COLOR
  },
  flowHorizontal: {
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 4
  },
  rightContainer: {
    flex: 1
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 8
  },
  bottom: { flex: 1, justifyContent: 'flex-end' }
});

export default Search;
