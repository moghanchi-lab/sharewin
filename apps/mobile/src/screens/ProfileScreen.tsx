import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../theme';
import { Settings, LogOut, ChevronRight } from 'lucide-react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://i.pravatar.cc/150?u=jules' }} style={styles.avatar} />
        <Text style={styles.name}>Jules Engineer</Text>
        <Text style={styles.handle}>@jules_dev</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Settings size={20} color={COLORS.text} />
          <Text style={styles.menuText}>Settings</Text>
          <ChevronRight size={20} color={COLORS.muted} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <LogOut size={20} color={COLORS.danger} />
          <Text style={[styles.menuText, { color: COLORS.danger }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { alignItems: 'center', padding: SPACING.xl },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: SPACING.md },
  name: { fontSize: 22, fontWeight: 'bold' },
  handle: { color: COLORS.muted },
  menu: { marginTop: SPACING.lg, paddingHorizontal: SPACING.md },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, backgroundColor: COLORS.gray, borderRadius: 12, marginBottom: SPACING.sm },
  menuText: { flex: 1, marginLeft: 12, fontWeight: '600' },
});

export default ProfileScreen;
