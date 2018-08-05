import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, InputGroup } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputProps {
  placeholder: string;
  value: string;
  error?: boolean;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  style?: object;
}

export default (props: InputProps) => (
  <Item>
    <InputGroup error={props.error}>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.inputStyles}
      />
      {props.error ? (
        <Icon name="error-outline" size={22.5} style={styles.iconStyles} />
      ) : null}
    </InputGroup>
  </Item>
);

const styles = StyleSheet.create({
  inputStyles: {
    marginTop: 10
  },
  iconStyles: {
    color: 'red',
    opacity: 1,
    marginRight: 10
  }
});
