import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header de búsqueda */}
      <View style={styles.header}>
        <Text style={styles.title}>¿A dónde vas?</Text>
        <TextInput
          style={styles.search}
          placeholder="Buscar destino..."
          placeholderTextColor="#999"
        />
        <View style={styles.filters}>
          {['Funza', 'Mosquera', 'Madrid', 'Facat.'].map((city) => (
            <TouchableOpacity key={city} style={styles.filterChip}>
              <Text style={styles.filterText}>{city}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Simulación del mapa */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>🗺️  Mapa de TransFunza</Text>
        <Text style={styles.mapSubtext}>Paraderos cercanos</Text>
      </View>

      {/* Lista de paraderos */}
      <View style={styles.bottomSheet}>
        <Text style={styles.sectionTitle}>Paraderos cercanos</Text>
        
        <View style={styles.stopCard}>
          <View style={styles.stopInfo}>
            <View style={[styles.dot, { backgroundColor: MyColors.success }]} />
            <View>
              <Text style={styles.stopName}>Parque Principal</Text>
              <Text style={styles.stopRoute}>F-12 · 4 min</Text>
            </View>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>A tiempo</Text>
          </View>
        </View>

        <View style={styles.stopCard}>
          <View style={styles.stopInfo}>
            <View style={[styles.dot, { backgroundColor: MyColors.secondary }]} />
            <View>
              <Text style={styles.stopName}>Av. Calle 15</Text>
              <Text style={styles.stopRoute}>M-03 · 9 min</Text>
            </View>
          </View>
          <View style={[styles.badge, { backgroundColor: '#FEF3C7' }]}>
            <Text style={[styles.badgeText, { color: '#92400E' }]}>Retraso</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: MyColors.background },
  header: {
    backgroundColor: MyColors.primary,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  search: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  filters: { flexDirection: 'row', marginTop: 12, gap: 8 },
  filterChip: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterText: { color: '#fff', fontSize: 13 },
  mapPlaceholder: {
    height: 220,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: { fontSize: 20, color: MyColors.primary, fontWeight: '600' },
  mapSubtext: { color: '#666', marginTop: 4 },
  bottomSheet: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    padding: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16, color: MyColors.text },
  stopCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  stopInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  stopName: { fontSize: 16, fontWeight: '600', color: MyColors.text },
  stopRoute: { fontSize: 13, color: MyColors.textSecondary, marginTop: 2 },
  badge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { color: '#065F46', fontSize: 12, fontWeight: '600' },
});