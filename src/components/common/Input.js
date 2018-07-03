import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, textStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{ label }</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={inputStyle}
      underlineColorAndroid='transparent'
    />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    flex: 7,
    fontSize: 18,
    height: 30,
    lineHeight: 23,
    width: 300,
    borderWidth: 0,
    paddingBottom: 0,
    paddingTop: 0
  },

  textStyle: {
    fontSize: 18,
    color: '#000',
    flex: 3,
    paddingLeft: 5
  },

  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
