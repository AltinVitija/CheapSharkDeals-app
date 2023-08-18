import React, {useState, useEffect} from 'react';
import {View, PanResponder, StyleSheet} from 'react-native';

const InputRange = ({
  valueLower,
  valueUpper,
  onValueChangeLower,
  onValueChangeUpper,
}) => {
  const [values, setValues] = useState([100, 0]);
  useEffect(() => {
    setValues([parseFloat(valueLower), parseFloat(valueUpper)]);
  }, [valueLower, valueUpper]);

  const handlePanResponderMove = (index, gesture) => {
    const sliderWidth = 200;
    const valueRange = 100;
    const stepSize = valueRange / sliderWidth;

    const newValue = Math.max(
      0,
      Math.min(100, values[index] + stepSize * gesture.dx),
    );

    const newValues = [...values];
    newValues[index] = newValue;

    setValues(newValues);
    if (index === 0) {
      onValueChangeLower(newValue.toFixed(2));
    } else {
      onValueChangeUpper(newValue.toFixed(2));
    }
  };

  const panResponderLeft = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      handlePanResponderMove(0, gesture);
    },
  });

  const panResponderRight = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      handlePanResponderMove(1, gesture);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View
          style={[
            styles.thumb,
            {left: `${values[0]}%`, backgroundColor: '#FFF'},
          ]}
          {...panResponderLeft.panHandlers}
        />
        <View
          style={[
            styles.thumb,
            {left: `${values[1]}%`, backgroundColor: '#FFF'},
          ]}
          {...panResponderRight.panHandlers}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 324,
    height: 8,
    backgroundColor: '#EBFF01',
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    top: -12,
  },
  thumb: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
});

export default InputRange;
