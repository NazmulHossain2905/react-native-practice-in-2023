import React from 'react';
import {View, StyleSheet} from 'react-native';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2647',
  },
});
