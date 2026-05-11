import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../theme';
import { ArrowUpRight, ArrowDownLeft, Send, History } from 'lucide-react-native';

const WalletScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Balance Card - Trust Wallet Style */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Main Wallet</Text>
        <Text style={styles.balanceAmount}>,240.50</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.iconCircle}><Send color={COLORS.white} size={24} /></View>
            <Text style={styles.actionText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.iconCircle}><ArrowDownLeft color={COLORS.white} size={24} /></View>
            <Text style={styles.actionText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Transaction History */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
        </View>
        
        {[1, 2, 3].map((i) => (
          <View key={i} style={styles.transactionItem}>
            <View style={styles.txIcon}>
              <ArrowUpRight color={COLORS.success} size={20} />
            </View>
            <View style={styles.txInfo}>
              <Text style={styles.txTitle}>Ad Share Reward</Text>
              <Text style={styles.txDate}>May 8, 2024</Text>
            </View>
            <Text style={styles.txAmount}>+-bash.80</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  balanceCard: {
    backgroundColor: COLORS.primary,
    margin: SPACING.md,
    borderRadius: 24,
    padding: SPACING.xl,
    alignItems: 'center',
  },
  balanceLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 16 },
  balanceAmount: { color: COLORS.white, fontSize: 36, fontWeight: 'bold', marginVertical: SPACING.sm },
  actionButtons: { flexDirection: 'row', marginTop: SPACING.lg, width: '100%', justifyContent: 'space-around' },
  actionBtn: { alignItems: 'center' },
  iconCircle: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 12, borderRadius: 30, marginBottom: 4 },
  actionText: { color: COLORS.white, fontWeight: '600' },
  section: { padding: SPACING.md },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.md },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: COLORS.primary },
  transactionItem: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.md, backgroundColor: COLORS.gray, padding: SPACING.md, borderRadius: 16 },
  txIcon: { backgroundColor: COLORS.white, padding: 8, borderRadius: 12, marginRight: SPACING.md },
  txInfo: { flex: 1 },
  txTitle: { fontWeight: 'bold', fontSize: 16 },
  txDate: { color: COLORS.muted, fontSize: 12 },
  txAmount: { fontWeight: 'bold', fontSize: 16, color: COLORS.success },
});

export default WalletScreen;
