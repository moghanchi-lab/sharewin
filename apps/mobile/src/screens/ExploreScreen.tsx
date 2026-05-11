import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../theme';
import { Share2 } from 'lucide-react-native';

const ads = [
  { id: '1', title: 'Nike Summer Sale', remaining: 450, total: 1000, image: 'https://picsum.photos/400/400' },
  { id: '2', title: 'Starbucks Refreshers', remaining: 120, total: 500, image: 'https://picsum.photos/400/401' },
];

const ExploreScreen = () => {
  return (
    <FlatList
      data={ads}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.adCard}>
          <Image source={{ uri: item.image }} style={styles.adImage} />
          <View style={styles.adContent}>
            <Text style={styles.adTitle}>{item.title}</Text>
            <Text style={styles.adStats}>{item.remaining} / {item.total} shares left</Text>
            <TouchableOpacity style={styles.shareButton}>
              <Share2 color={COLORS.white} size={20} />
              <Text style={styles.shareText}>Share & Earn</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  adCard: { margin: SPACING.md, borderRadius: 16, overflow: 'hidden', backgroundColor: COLORS.white, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  adImage: { width: '100%', height: 300 },
  adContent: { padding: SPACING.md },
  adTitle: { fontSize: 18, fontWeight: 'bold' },
  adStats: { color: COLORS.muted, marginVertical: 4 },
  shareButton: { backgroundColor: COLORS.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 12, marginTop: SPACING.sm },
  shareText: { color: COLORS.white, fontWeight: 'bold', marginLeft: 8 },
});

export default ExploreScreen;
