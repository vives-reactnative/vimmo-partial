import { createStackNavigator } from 'react-navigation-stack';
import Search from '../screens/Search';

export const FeedStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: () => ({
      title: 'VIMMO - Zoek je huis'
      // Vergeet de verder styling van je header niet!
      // rode achtergrond (uit theme)
      // witte tekst
    })
  }
});
