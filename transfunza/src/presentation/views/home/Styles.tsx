import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.primary,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '50%',
    backgroundColor: MyColors.white,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: MyColors.text,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: MyColors.primary,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.primary,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '12%',
    alignItems: 'center',
  },
  logoImage: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: MyColors.white,
    textAlign: 'center',
    fontSize: 26,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    color: MyColors.white,
    fontSize: 14,
    marginTop: 4,
    opacity: 0.9,
  },
});

export default HomeStyles;
