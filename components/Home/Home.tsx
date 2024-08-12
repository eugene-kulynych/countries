import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {HomeScreenProps, RootStackParamList} from '../../types/routring.ts';
import {header} from '../../styles/home/header.ts';
import {body} from '../../styles/home/body.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Country} from '../../types/country.ts';

type ItemProps = {
  country: Country;
  nav: NativeStackNavigationProp<RootStackParamList, 'Home', undefined>;
};

const Item = ({country, nav}: ItemProps) => (
  <Pressable onPress={() => nav.navigate('DetailPage', {country: country})}>
    <View style={body.item}>
      <Text style={body.title}>{country.name.common}</Text>
      <Image
        style={body.image}
        source={{uri: country.flags.png}}
        alt={country.flags.alt}
      />
    </View>
  </Pressable>
);
const Home: React.FC<HomeScreenProps> = ({
  navigation,
  cb,
  data,
}): React.JSX.Element => {
  return (
    <SafeAreaView>
      <View style={header.container}>
        <Text style={header.text}>Search for countries</Text>
        <TextInput
          style={header.input}
          placeholder={'Type here'}
          onChangeText={cb}
        />
      </View>
      <View style={body.container}>
        {!data.length ? (
          <Text style={header.text}>No resuilts</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <>
                <Item nav={navigation} country={item} />
              </>
            )}
            keyExtractor={item => `${item.population}`}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
