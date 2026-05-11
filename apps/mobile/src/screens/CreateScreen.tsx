import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../theme';

const CreateScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Campaign Title</Text>
        <TextInput style={styles.input} placeholder="e.g. Summer Collection Launch" />
        
        <Text style={styles.label}>Description</Text>
        <TextInput style={[styles.input, { height: 100 }]} multiline placeholder="Tell users about your ad..." />
        
        <Text style={styles.label}>Total Budget ($)</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="1000" />
        
        <Text style={styles.label}>Estimated Clicks</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="10000" />

        <View style={styles.feeBox}>
          <Text style={styles.feeText}>Platform Fee (20%): 00</Text>
          <Text style={styles.feeText}>Distributable: 00</Text>
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Pay & Activate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  form: { padding: SPACING.md },
  label: { fontWeight: 'bold', marginBottom: 8, fontSize: 16 },
  input: { backgroundColor: COLORS.gray, padding: 12, borderRadius: 12, marginBottom: SPACING.md },
  feeBox: { padding: SPACING.md, backgroundColor: '#E8F2FF', borderRadius: 12, marginBottom: SPACING.lg },
  feeText: { color: COLORS.primary, fontWeight: '600' },
  submitBtn: { backgroundColor: COLORS.primary, padding: 16, borderRadius: 12, alignItems: 'center' },
  submitText: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 },
});

export default CreateScreen;
