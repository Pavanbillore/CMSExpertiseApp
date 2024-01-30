import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Alert,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const DepartmentHome = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, settitle] = useState('');
  const [movieposter, setMovieposter] = useState('');
  const [details, setDetails] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [totalrating, setTotalrating] = useState('');
  const posterImg = require('../../assets/images/avatar.jpg');
  const sneha_api_url =
    'https://api.themoviedb.org/3/movie/157336?api_key=36f033bb2f3fb2e33f1150070a7a8f03';
  const getMovies = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmYwMzNiYjJmM2ZiMmUzM2YxMTUwMDcwYTdhOGYwMyIsInN1YiI6IjY1MmZjMWU5YTgwMjM2MDBlMGFjZjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ucseNtMUg9g3oQTRikC32AOtu3Z7vFoNV6f08jblaBU',
        },
      };
      const response = await fetch(sneha_api_url, options);
      const data = await response.json();
      setData(data);
      settitle(data.original_title);
      console.log('movies data', data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  const persons = [
    {
      id: '1',
      name: 'Earnest Green',
      title: 'Inter stlller',
      descritions:
        'The adventures of a group of explorers. who make use of a newly discovered wormhole to surpass the limitations.',
    },
    {
      id: '2',
      name: 'Winston Orn',
      title: 'Inter stlller',
      descritions:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    },
    {
      id: '3',
      name: 'Carlton Collins',
      title: 'Inter stlller',
      descritions:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    },
    {
      id: '4',
      name: 'Malcolm Labadie',
      title: 'Inter stlller',
      descritions:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    },
    {
      id: '5',
      name: 'Michelle Dare',
      title: 'Inter stlller',
      descritions:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    },
    {
      id: '6',
      name: 'Carlton Zieme',
    },
    {
      id: '7',
      name: 'Jessie Dickinson',
    },
    {
      id: '8',
      name: 'Julian Gulgowski',
    },
    {
      id: '9',
      name: 'Ellen Veum',
    },
    {
      id: '10',
      name: 'Lorena Rice',
    },

    {
      id: '11',
      name: 'Carlton Zieme',
    },
    {
      id: '12',
      name: 'Jessie Dickinson',
    },
    {
      id: '13',
      name: 'Julian Gulgowski',
    },
    {
      id: '14',
      name: 'Ellen Veum',
    },
    {
      id: '15',
      name: 'Lorena Rice',
    },
  ];
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <StatusBar backgroundColor={'#000'} />
      {loading ? (
        <View style={Styles.loadContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <View style={Styles.flatmainContainer}>
          <FlatList
            scrollEnabled={true}
            keyExtractor={item => item.id.toString()}
            data={persons}
            renderItem={({item}) => (
              <View style={Styles.fContainer}>
                <View style={Styles.viewStyles1}>
                  <View>
                    <Image source={posterImg} style={Styles.pickStyle} />
                  </View>
                  <View style={Styles.titleContainer}>
                    <Text style={Styles.titleStyles}>{title}</Text>
                    <Text style={Styles.DescTxtStyles}>
                      {item.descritions}..
                    </Text>
                  </View>
                </View>
                <View style={Styles.discriptionStyle}>
                  <Text style={Styles.yearTxtStyles}>
                    {item.release_date ? item.release_date : ''}
                  </Text>
                  <Text style={Styles.ratingStyles}>
                    {item.vote_average}/
                    <Text style={Styles.ratingStyles}>{item.vote_count}</Text>
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default DepartmentHome;
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#000',
    padding: 10,
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  fContainer: {
    padding: 10,
    margin: 2,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  viewStyles1: {
    flexDirection: 'row',
  },
  pickStyle: {
    height: 150,
    width: 120,
    borderRadius: 11,
  },
  titleStyles: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  ratingStyles: {
    color: '#F1C330',
    fontSize: 16,
  },
  yearTxtStyles: {
    color: '#65E37F',
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  titleContainer: {},
  discriptionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DescTxtStyles: {
    color: '#5B5A5E',
    fontSize: 14,
    padding: 5,
    fontWeight: '500',
    fontFamily: 'serif',
    paddingLeft: 10,
    width: 240,
  },
  flatmainContainer: {},
});
