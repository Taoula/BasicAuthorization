import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, buttonText }) => {
  const { buttonStyle, buttonTextStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#7caaf4',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },

  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#7caaf4',
    paddingTop: 5,
    paddingBottom: 5

  }
};

export { Button };
