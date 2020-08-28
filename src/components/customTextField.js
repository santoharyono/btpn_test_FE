import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Colors, HelperText} from 'react-native-paper';

const CustomTextInput = ({
  label,
  keyboardType,
  value,
  id,
  onInputChange,
  errorText,
  isError,
  isDisable = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        mode="outlined"
        keyboardType={keyboardType}
        style={styles.textInput}
        value={value}
        disabled={isDisable}
        onChangeText={(textVal) => {
          let dict = {};
          dict[id] = textVal;
          onInputChange(dict);
        }}
      />
      <HelperText type="error" visible={isError}>
        {errorText}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '10%',
    marginVertical: '2%',
  },
  textInput: {
    backgroundColor: Colors.blue50,
  },
});

export default CustomTextInput;
