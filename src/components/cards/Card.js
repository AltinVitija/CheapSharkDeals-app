import {View, Text, Image} from 'react-native';
import React from 'react';

const Card = ({game}) => {
  return (
    <View>
      {game.thumb && (
        <Image source={{uri: game.thumb}} style={{width: 120, height: 120}} />
      )}
      <Text>{game.title}</Text>
      <Text>{game.normalPrice}</Text>
      <Text>{game.salePrice}</Text>
      {/* <Text>{game.releaseDate}</Text> */}
      {/* <Text>{game.metacriticLink}</Text> */}
    </View>
  );
};

export default Card;
