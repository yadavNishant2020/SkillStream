import React from 'react';
import {View, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import {useStyle} from './style';
import {useTheme} from '../../theme';

const LogIn = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Image
        source={require('./../../assets/img/login.jpg')}
        style={styles.imgContainer}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Skill Stream</Text>
        <Text style={styles.subtitle}>Login/Signup</Text>
      </View>
      <LinearGradient
        colors={['#0C7DE4', '#12B3C9']}
        style={styles.btn}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <MaterialCommunityIcons
          style={{color: 'white'}}
          name="google"
          size={25}
        />
        <Text style={styles.signinText}>Singin with Google</Text>
      </LinearGradient>
    </View>
  );
};

export default LogIn;
