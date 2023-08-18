import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

const StarRatingRow = ({count, defaultRating, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.ratingContainer, {width: count * 23}]}
        onPress={onPress}>
        <AirbnbRating
          showRating={false}
          count={count}
          defaultRating={defaultRating}
          size={15}
          isDisabled
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  ratingContainer: {
    height: 31,
    borderRadius: 32,
    backgroundColor: '#384151',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StarRatingRow;
