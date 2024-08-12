import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {DetailPageScreenProps} from '../../types/routring.ts';
import {details} from '../../styles/detailpage/styles.ts';

const DetailPage: React.FC<DetailPageScreenProps> = ({
  route,
}): React.JSX.Element => {
  const {
    params: {country},
  } = route;

  return (
    <SafeAreaView style={details.container}>
      <View>
        <Image style={details.image} source={{uri: country.flags.png}} />
        <Text style={details.text}>Name: {country.name.official}</Text>
        <Text style={details.text}>Capital: {country.capital}</Text>
        <Text style={details.text}>Region: {country.region}</Text>
        <Text style={details.text}>Population: {country.population}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailPage;
