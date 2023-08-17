import {AirbnbRating} from 'react-native-ratings';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;

const Filter = ({onPressShowResult}) => {
  // const [priceRange, setPriceRange] = useState({min: 0, max: 250});

  // const handlePressStar = rating => {
  //   setSelectedRating(rating);
  //   handleRatingChange(rating); // Call the prop function to update FilterScreen state
  // };

  // const handleMinPriceChange = value => {
  //   setPriceRange(prevRange => ({...prevRange, min: value}));
  // };

  // const handleMaxPriceChange = value => {
  //   setPriceRange(prevRange => ({...prevRange, max: value}));
  // };

  return (
    <View style={{flex: 1}}>
      <Text>Price</Text>
      {/* <TextInput
        placeholder="Min Price"
        keyboardType="numeric"
        value={priceRange.min.toString()}
        onChangeText={handleMinPriceChange}
      />
      <TextInput
        placeholder="Max Price"
        keyboardType="numeric"
        value={priceRange.max.toString()}
        onChangeText={handleMaxPriceChange}
      /> */}
      <Text style={styles.titleRate}>Rate</Text>

      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            height: 31,
            width: 31,
            borderRadius: 32,
            backgroundColor: '#384151',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handlePressStar(1)}>
          <AirbnbRating
            showRating={false}
            count={1}
            defaultRating={1}
            size={15}
            isDisabled={true}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 31,
            width: 54,
            borderRadius: 32,
            backgroundColor: '#384151',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handlePressStar(2)}>
          <AirbnbRating
            showRating={false}
            count={2}
            defaultRating={2}
            size={15}
            isDisabled={true}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 31,
            width: 77,
            borderRadius: 32,
            backgroundColor: '#384151',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handlePressStar(3)}>
          <AirbnbRating
            showRating={false}
            count={3}
            defaultRating={3}
            size={15}
            isDisabled={true}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 31,
            width: 100,
            borderRadius: 32,
            backgroundColor: '#384151',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handlePressStar(4)}>
          <AirbnbRating
            showRating={false}
            count={4}
            defaultRating={4}
            size={15}
            isDisabled={true}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 70,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          style={{
            height: 31,
            width: 123,
            borderRadius: 32,
            backgroundColor: '#384151',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handlePressStar(5)}>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={5}
            size={15}
            isDisabled={true}
          />
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={onPressShowResult}
          style={{
            height: 52,
            width: 331,
            backgroundColor: '#EBFF01',
            borderRadius: 32,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'Manrope',
              fontWeight: '700',
            }}>
            Show Result
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleRate: {
    fontFamily: 'Manrope-Light',
    fontSize: windowWidth * 0.04,
    fontWeight: '800',
    lineHeight: windowWidth * 0.05,
    letterSpacing: 1,
    color: '#FFFFFF',
  },
});
export default Filter;
