import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const SearchBar = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleSearch}>Search by title</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter title"
          placeholderTextColor={'#8D939B'}
          onChangeText={onChangeText}
          style={styles.input}
        />
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: windowWidth * 0.03,
  },
  header: {
    height: windowWidth * 0.06,
    width: windowWidth * 0.9,
    justifyContent: 'center',
    marginBottom: 10,
  },
  titleSearch: {
    fontFamily: 'Manrope-Light',
    fontSize: windowWidth * 0.04,
    fontWeight: '800',
    lineHeight: windowWidth * 0.05,
    letterSpacing: 1,
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    width: windowWidth * 0.95,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.02,
    borderColor: '#474E5B',
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: windowWidth * 0.03,
    color: '#8D939B',
  },
  icon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    marginRight: windowWidth * 0.03,
  },
});

export default SearchBar;
