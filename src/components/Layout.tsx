import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from 'styles/theme';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <View style={[styles.container, {paddingHorizontal: 15}]}>{children}</View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue1,
  },
});
