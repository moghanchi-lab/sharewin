import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../theme';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShareWin</Text>
      <Text style={styles.subtitle}>Share more, earn more</Text>
      <TouchableOpacity style={styles.googleBtn}>
        <Text style={styles.btnText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', padding: SPACING.xl },
  title: { color: COLORS.white, fontSize: 42, fontWeight: 'bold' },
  subtitle: { color: 'rgba(255,255,255,0.8)', fontSize: 18, marginBottom: 50 },
  googleBtn: { backgroundColor: COLORS.white, width: '100%', padding: 16, borderRadius: 30, alignItems: 'center' },
  btnText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 16 },
});

export default LoginScreen;
