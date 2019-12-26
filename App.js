/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button, Linking
} from 'react-native';
import {

  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import AppIntroSlider from 'react-native-app-intro-slider'
import Taufik from './quiz/taufik';
import Ifah from './quiz/ifah';
import Main from './quiz/main';
import Quiz from './quiz/quiz'
import store from './redux/store'
import Hasil from './quiz/hasil'
import { Provider } from 'react-redux';
import NavigationService,{setTopLevelNavigator} from './NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show_Main_App: false ,loading:false}
    AsyncStorage.getItem('pernah', (err, result) => {
      if(result==='pernah'){
        console.log('aaa');
        
        this.setState({show_Main_App:true})
        }else{
           console.log('belum');
        }
       
    });
    
  
  };

  componentDidMount(){
  
    setTimeout(() => {

      this.setState({ loading: true })

  }, 300);
  }
  on_Done_all_slides = async() => {
    let masuk;
    await AsyncStorage.setItem('pernah', 'pernah', () => {
      AsyncStorage.getItem('pernah', (err, result) => {
          console.log('Pernah',result);
        });
  
        });

  this.setState({ show_Main_App: true });
};
  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  };
  render() {
    // const eventConfig = {
    //   title:'sukses',
    //   // and other options
    // };
    console.log('LOG',this.state.coba);
    
    console.log('TOMPONENT');
    if(this.state.loading){
      if (this.state.show_Main_App) {
      
        return (
          <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor='transparent'/>
            <Provider store={store}>
              <Apps ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>
            </Provider>
          </View>
  
        );
      } else {
        return (
          <AppIntroSlider slides={slides} onDone={this.on_Done_all_slides}
          />
        );
      }
    }else{
      return(<View></View>)
    }
    
  }
}

const App2 = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    },

  },
  Hanifah: {
    screen: Ifah,
    navigationOptions: {
      header: null
    },


  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      header: null
    }
  },
  Hasil: {
    screen: Hasil,
    navigationOptions: {
      header: null
    }
  },
  Taufik: {
    screen: Taufik,
    navigationOptions: {
      header: null
    }
  }
  // TabScreen: {
  //   screen: TabNavigator,
  //   navigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#633689',

  //     },
  //     headerLeft: null,
  //     headerTintColor: '#FFFFFF',
  //     title: 'TabExample',
  //   },
  // },
});
const Apps = createAppContainer(App2);
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
  ,
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const slides = [
  {
    key: 'k1',
    title: 'Ecommerce Leader',
    text: 'Best ecommerce in the world',
    image: {
      uri:
        'https://i.imgur.com/jr6pfzM.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7BB64',
  },
  {
    key: 'k2',
    title: 'fast delivery',
    text: 'get your order insantly fast',
    image: {
      uri:
        'https://i.imgur.com/xjVIp3F.jpg',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F4B1BA',
  },
  {
    key: 'k3',
    title: 'many store ',
    text: 'Multiple store location',
    image: {
      uri: 'https://i.imgur.com/bXgn893.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#4093D2',
  },
  {
    key: 'k4',
    title: '24 hours suport',
    text: ' Get Support 24 Hours with Real Human',
    image: {
      uri: 'https://i.imgur.com/mFKL47j.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#644EE2',
  }
];



export default App;
