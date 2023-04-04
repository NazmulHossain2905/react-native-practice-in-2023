import {createDrawerNavigator} from '@react-navigation/drawer';
import {theme} from 'styles/theme';

import ChatMessages from './ChatMessages';

export type DrawerNavigationParamList = {
  ChatMessages: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigationParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ChatMessages"
      screenOptions={{
        drawerStyle: {backgroundColor: theme.colors.blue1, padding: 10},
        drawerActiveBackgroundColor: theme.colors.blue2,
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: theme.colors.blue4,
        headerStyle: {backgroundColor: theme.colors.blue3},
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="ChatMessages"
        component={ChatMessages}
        options={{drawerLabel: 'Chat Messages', headerTitle: 'Chat Messages'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
