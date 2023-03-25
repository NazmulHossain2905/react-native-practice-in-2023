import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigation, {DrawerNavigationParamList} from './Drawer';

export type RootNavigationParamList = {
  DrawerNavigation: NavigatorScreenParams<DrawerNavigationParamList>;
};

const RootStack = createStackNavigator<RootNavigationParamList>();
const RootNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
