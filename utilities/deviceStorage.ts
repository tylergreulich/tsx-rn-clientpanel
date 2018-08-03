import { AsyncStorage } from 'react-native';

const deviceStorage = {
    // our AsyncStorage functions will go here :)
  async saveItem(key: any, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};

export default deviceStorage;