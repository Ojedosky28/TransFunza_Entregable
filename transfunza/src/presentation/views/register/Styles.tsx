import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.primary,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '75%',
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
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 25,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.border,
    marginLeft: 15,
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
    top: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: MyColors.white,
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default RegisterStyles;
