import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
        <Text style={styles.name}>Renzo</Text>
      </View>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Ionicons name="log-out" size={20} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  header: { alignItems: 'center', marginVertical: 40 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  logoutText: { color: 'red', marginLeft: 10, fontWeight: 'bold' }
});

export default ProfileScreen;