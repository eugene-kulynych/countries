import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Country} from './country.ts';

export type RootStackParamList = {
  Home: undefined; // Add other screens if necessary
  DetailPage: {country: Country};
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
> & {cb: (text: string) => void; data: Country[]};

export type DetailPageScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailPage'
>;
