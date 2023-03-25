import {createDrawerNavigator} from '@react-navigation/drawer';

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
        drawerStyle: {backgroundColor: '#f00'},
      }}>
      <Drawer.Screen name="ChatMessages" component={ChatMessages} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
