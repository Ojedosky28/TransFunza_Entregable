import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

export const AlertsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alertas</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.section}>Mis alertas</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>F-12 está cerca</Text>
          <Text style={styles.cardDesc}>Llegará a Parque Principal en 3 minutos</Text>
          <Text style={styles.cardTime}>Hace 2 min</Text>
        </View>

        <Text style={[styles.section, { marginTop: 24 }]}>Comunidad</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Retraso en M-03</Text>
          <Text style={styles.cardDesc}>Reportado por un usuario · Av. Calle 15</Text>
          <Text style={styles.cardTime}>Hace 15 min</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Congestión en F-20</Text>
          <Text style={styles.cardDesc}>Reportado por un usuario · Centro</Text>
          <Text style={styles.cardTime}>Hace 32 min</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: MyColors.background },
  header: {
    backgroundColor: MyColors.primary,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  section: { fontSize: 16, fontWeight: 'bold', color: MyColors.text, marginBottom: 12 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: MyColors.text },
  cardDesc: { fontSize: 14, color: MyColors.textSecondary, marginTop: 4 },
  cardTime: { fontSize: 12, color: '#9CA3AF', marginTop: 8 },
});