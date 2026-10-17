import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../components/RoundedButton';
import { MyColors } from '../../../theme/AppTheme';
import { useUserLocal } from '../../../hooks/useUserLocal';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({ navigation }: Props) => {
  const { removeSession } = useViewModel();
  const { user } = useUserLocal();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../../assets/my_user.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>
          {user?.name ?? 'Usuario'} {user?.lastname ?? ''}
        </Text>
        <Text style={styles.email}>{user?.email ?? ''}</Text>
        {user?.municipality && (
          <Text style={styles.municipality}>{user.municipality}</Text>
        )}
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Mi cuenta TransFunza</Text>
        <Text style={styles.infoText}>
          Aquí podrás gestionar tus rutas favoritas, notificaciones y preferencias
          de transporte público.
        </Text>

        <View style={{ marginTop: 40 }}>
          <RoundedButton
            text="CERRAR SESIÓN"
            onPress={async () => {
              await removeSession();
              navigation.replace('HomeScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
  header: {
    backgroundColor: MyColors.primary,
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: MyColors.white,
    marginBottom: 12,
  },
  name: {
    color: MyColors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    color: MyColors.white,
    fontSize: 14,
    opacity: 0.9,
    marginTop: 4,
  },
  municipality: {
    color: MyColors.white,
    fontSize: 13,
    marginTop: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  body: {
    flex: 1,
    padding: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: MyColors.text,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: MyColors.textSecondary,
    lineHeight: 22,
  },
});
