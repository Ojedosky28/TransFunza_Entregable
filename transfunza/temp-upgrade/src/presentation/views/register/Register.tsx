import React, { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const {
    name,
    lastname,
    email,
    phone,
    password,
    confirmPassword,
    errorMessage,
    onChange,
    register,
  } = useViewModel();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  const handleRegister = async () => {
    const response = await register();
    if (response && response.success) {
      ToastAndroid.show('Cuenta creada correctamente', ToastAndroid.LONG);
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/map.png')}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>TransFunza</Text>
      </View>

      <View style={styles.form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.formText}>REGISTRARSE</Text>

          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder="Nombre"
            keyboardType="default"
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomTextInput
            image={require('../../../../assets/my_user.png')}
            placeholder="Apellido"
            keyboardType="default"
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />

          <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            property="email"
            onChangeText={onChange}
            value={email}
          />

          <CustomTextInput
            image={require('../../../../assets/phone.png')}
            placeholder="Teléfono"
            keyboardType="numeric"
            property="phone"
            onChangeText={onChange}
            value={phone}
          />

          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder="Contraseña"
            keyboardType="default"
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />

          <CustomTextInput
            image={require('../../../../assets/confirm_password.png')}
            placeholder="Confirmar contraseña"
            keyboardType="default"
            property="confirmPassword"
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry={true}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="CREAR CUENTA" onPress={handleRegister} />
          </View>

          <View style={styles.formRegister}>
            <Text>¿Ya tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.formRegisterText}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
