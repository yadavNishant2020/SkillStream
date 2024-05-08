import React, {useEffect} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useStyle} from './style';
import {useTheme} from '../../theme';

const LogIn = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '468143246422-ddrmquiobefnf7ebr4pi1ea443di0urj.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    console.log(idToken);
    Alert.alert('Login Successful');

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Image
        source={require('./../../assets/img/login.jpg')}
        style={styles.imgContainer}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO SKILL STREAM</Text>
        <Text style={styles.subtitle}>Login/Signup</Text>
      </View>
      <TouchableOpacity
        onPress={onGoogleButtonPress}
        activeOpacity={0.7} // Adjust opacity as needed
      >
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
          <Text style={styles.signinText}>Sign-In with Google</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
