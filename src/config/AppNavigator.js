import { createStackNavigator } from 'react-navigation-stack';
import Search from '../screens/Search';
import ResultsList from '../screens/ResultList';
import theme from '../styles/theme';

export const FeedStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: () => ({
      title: 'VIMMO - Zoek je huis',
      headerStyle: {
        backgroundColor: theme.PRIMARY_COLOR
      },
      headerTitleStyle: {
        color: 'white'
      }
    })
  },
  Details: {
    screen: ResultsList,
    navigationOptions: ({ navigation }) => ({
      title: `Resultaten: (${navigation.state.params.listings.length})`,
      headerStyle: {
        backgroundColor: theme.PRIMARY_COLOR
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white'
      }
    })
  }
});
