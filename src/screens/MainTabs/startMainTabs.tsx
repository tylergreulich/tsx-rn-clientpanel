import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('home', 30),
    Icon.getImageSource('add-shopping-cart', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'clientpanel.DashboardScreen',
          label: 'Dashboard',
          title: 'Dashboard',
          icon: sources[0]
        },
        {
          screen: 'clientpanel.AddClientScreen',
          label: 'Add Client',
          title: 'Add Client',
          icon: sources[1]
        }
      ]
    });
  });
};

export default startTabs;
