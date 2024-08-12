import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import debounce from 'lodash.debounce';
import axios from 'axios';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home/Home.tsx';
import DetailPage from './components/DetailPage/DetailPage.tsx';
import {RootStackParamList} from './types/routring.ts';
import {Country} from './types/country.ts';
import {API} from '@env';

const Stack = createNativeStackNavigator<RootStackParamList>();
const url = API;

function App(): React.JSX.Element {
  const [countries, setCountries] = useState<Country[]>([]);
  const [text, onChangeText] = React.useState('');

  const handleChange = (text: string) => {
    onChangeText(text); // Replace with actual handling logic
  };

  const debouncedHandleChange = debounce(handleChange, 500);
  const onChange = (str: string) => {
    debouncedHandleChange(str);
  };

  const fetchCountries = useCallback(async (query: string) => {
    try {
      const data = await axios.get(`${url}${query}`);
      setCountries(data.data);
    } catch (e) {
      // console.error(e);
      setCountries([]);
    }
  }, []);

  const sortedCountries = useMemo(() => {
    return countries.sort((a, b) => {
      if (a.name.common > b.name.common) {
        return 1;
      } else {
        return -1;
      }
    });
  }, [countries]);

  useEffect(() => {
    console.log(url);
    fetchCountries(text);
  }, [text, fetchCountries]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1c335e',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Home">
          {props => <Home {...props} cb={onChange} data={sortedCountries} />}
        </Stack.Screen>
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
