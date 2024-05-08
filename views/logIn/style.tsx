import {StyleSheet} from 'react-native';
import {themeProps} from '../../theme';
import {FontSize, scale, scaleVertical} from '../../theme/scale';
import colors from '../../shared/colors';

export const useStyle = (theme?: themeProps) =>
  StyleSheet.create({
    container: {
      paddingTop: scaleVertical(25),
      marginTop: scaleVertical(-20),
      backgroundColor: 'white',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    imgContainer: {
      height: scaleVertical(220),
      width: '100%',
      objectFit: 'cover',
    },
    title: {
      color: '#12B3C9',
      fontSize: FontSize.H1,
      textAlign: 'center',
      fontFamily: 'Montserrat-ExtraBold',
      // fontWeight: 'black',
      marginTop: scaleVertical(30),
      paddingHorizontal: scale(30),
      letterSpacing: 2.5,
      
    },
    subtitle: {
      color: 'black',
      fontSize: FontSize.H3,
      textAlign: 'center',
      marginTop: scaleVertical(90),
    },
    signinText: {
      fontSize: FontSize.H3,
      color: 'white',
    },
    btn: {
      backgroundColor: colors.primary,
      padding: scale(15),
      margin: scale(30),
      borderRadius: 10,
      textAlign: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
  });

// innerContainer: {
//   padding: scale(10),
//   borderRadius: 10,
// },
// header: {
//   paddingHorizontal: scale(30),
//   justifyContent: 'center',
//   flex: 0.1,
// },

// footer: {
//   flex: 0.8,
//   // justifyContent: 'center',
//   padding: scale(20),
//   backgroundColor: theme?.colors.transparent,
// },
// label: {
//   fontSize: FontSize.H8,
//   color: theme?.colors.gray,
// },
// input: {
//   minHeight: scaleVertical(35),
// },
// submitBtn: {
//   // marginTop: scaleVertical(20),
// },
// submitBtnTxt: {
//   fontSize: FontSize.H8,
//   textTransform: 'uppercase',
//   color: theme?.colors.white,
// },
