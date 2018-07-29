import * as React from 'react';
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
        style={{ marginTop: 10 }}
      />
      {props.error ? (
        <Icon
          name="error-outline"
          size={22.5}
          style={{ color: 'red', opacity: 1, marginRight: 10 }}
        />
      ) : null}
    </InputGroup>
  </Item>
);
