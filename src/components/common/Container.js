import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 5
  }
};

export { Container };
