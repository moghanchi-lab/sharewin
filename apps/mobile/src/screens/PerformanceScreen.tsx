import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../theme';

const PerformanceScreen = () => {
  const [tab, setTab] = useState<'sharer' | 'advertiser'>('sharer');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, tab === 'sharer' && styles.activeTab]} 
          onPress={() => setTab('sharer')}
        >
          <Text style={[styles.tabText, tab === 'sharer' && styles.activeTabText]}>Sharer</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, tab === 'advertiser' && styles.activeTab]} 
          onPress={() => setTab('advertiser')}
        >
          <Text style={[styles.tabText, tab === 'advertiser' && styles.activeTabText]}>Advertiser</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.summaryText}>Total Earned: 5.20</Text>
        <Text style={styles.subText}>You have shared 12 ads this month.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  tabContainer: { flexDirection: 'row', padding: SPACING.md },
  tab: { flex: 1, padding: 12, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: COLORS.gray },
  activeTab: { borderBottomColor: COLORS.primary },
  tabText: { fontWeight: 'bold', color: COLORS.muted },
  activeTabText: { color: COLORS.primary },
  content: { padding: SPACING.md, alignItems: 'center' },
  summaryText: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subText: { color: COLORS.muted },
});

export default PerformanceScreen;
