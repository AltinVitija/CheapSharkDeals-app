import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import StarRatingRow from '../starRating/StarRating';
import InputRange from '../../components/inputrange/InputRange'; // Update the path accordingly

const windowWidth = Dimensions.get('window').width;

const Filter = ({
  onPressShowResult,
  valueUpperPrice,
  valueLowerPrice,
  onChangeTextLower,
  onChangeTextUpper,
  onStarRatingPress,
}) => {
  const renderStarRatingRows = () => {
    const starRatings = [1, 2, 3, 4, 5];
    const rows = [];

    for (let i = 0; i < starRatings.length - 1; i += 4) {
      const row = starRatings
        .slice(i, i + 4)
        .map(rating => (
          <StarRatingRow
            key={rating}
            count={rating}
            defaultRating={rating}
            onPress={() => onStarRatingPress(rating)}
          />
        ));
      rows.push(
        <View key={i} style={styles.ratingRow}>
          {row}
        </View>,
      );
    }

    const lastRowStyle = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      right: 100,
    };

    const lastRow = (
      <View key={starRatings.length} style={lastRowStyle}>
        <StarRatingRow
          count={5}
          defaultRating={5}
          onPress={() => onStarRatingPress(5)}
        />
      </View>
    );

    rows.push(lastRow);
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.priceSection}>
        <View style={styles.section}>
          <Text style={styles.title}>Price</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="From"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={valueLowerPrice}
            onChangeText={onChangeTextLower}
            style={styles.input}
          />
          <TextInput
            placeholder="To"
            keyboardType="numeric"
            value={valueUpperPrice}
            onChangeText={onChangeTextUpper}
            style={styles.input}
          />
        </View>
        <InputRange
          valueLower={valueLowerPrice}
          valueUpper={valueUpperPrice}
          onValueChangeLower={onChangeTextLower}
          onValueChangeUpper={onChangeTextUpper}
        />
      </View>
      <View style={styles.rateSection}>
        <View style={styles.section}>
          <Text style={styles.title}>Rate</Text>
        </View>
        <View style={styles.ratingContainer}>{renderStarRatingRows()}</View>
        <TouchableOpacity
          onPress={onPressShowResult}
          style={styles.showResultButton}>
          <Text style={styles.buttonText}>Show Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    height: 20,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  priceSection: {
    height: 155,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: 156,
    height: 45,
    flexShrink: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    opacity: 0.2,
    color: 'white',
    top: -10,
  },
  rateSection: {
    height: 220,
  },
  title: {
    fontFamily: 'Manrope',
    fontSize: windowWidth * 0.04,
    fontWeight: '800',
    lineHeight: windowWidth * 0.05,
    letterSpacing: 1,
    color: '#FFFFFF',
  },
  ratingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 25,
    top: 10,
  },
  showResultButton: {
    height: 52,
    width: 331,
    backgroundColor: '#EBFF01',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Manrope',
    fontWeight: '700',
  },
});

export default Filter;
