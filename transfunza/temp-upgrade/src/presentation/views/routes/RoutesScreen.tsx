import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

const routes = [
  { code: 'F-12', from: 'Parque Principal', to: 'Terminal', time: 8, status: 'A tiempo', color: '#10B981' },
  { code: 'M-03', from: 'Av. Calle 15', to: 'Portal', time: 14, status: 'Retraso 5 min', color: '#F59E0B' },
  { code: 'F-20', from: 'Av. Calle 13', to: 'Centro', time: 19, status: 'Congestión', color: '#EF4444' },
];

export const RoutesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rutas disponibles</Text>
        <Text style={styles.subtitle}>Funza → Mosquera · 3 rutas</Text>
      </View>

      <ScrollView style={styles.list} contentContainerStyle={{ padding: 16 }}>
        {routes.map((route, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.codeBadge}>
                <Text style={styles.codeText}>{route.code}</Text>
              </View>
              <Text style={styles.routePath}>{route.from} → {route.to}</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.time}>{route.time}</Text>
              <Text style={styles.timeLabel}>min</Text>
              <View style={[styles.statusBadge, { backgroundColor: route.color + '22' }]}>
                <Text style={[styles.statusText, { color: route.color }]}>{route.status}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  subtitle: { color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  list: { flex: 1 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  codeBadge: {
    backgroundColor: MyColors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  codeText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  routePath: { fontSize: 14, color: MyColors.textSecondary, flex: 1 },
  cardBody: { flexDirection: 'row', alignItems: 'flex-end', gap: 4 },
  time: { fontSize: 36, fontWeight: 'bold', color: MyColors.text },
  timeLabel: { fontSize: 16, color: MyColors.textSecondary, marginBottom: 6 },
  statusBadge: {
    marginLeft: 'auto',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: { fontSize: 13, fontWeight: '600' },
});