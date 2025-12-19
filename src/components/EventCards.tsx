import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EventItem } from '../types/event';

interface Props {
  item: EventItem;
  isFavorite: boolean;
  onFavoritePress: () => void;
}

const EventCards: React.FC<Props> = ({ item, isFavorite, onFavoritePress }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image_url }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.date}>{item.date} | {item.time}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <View style={styles.tagRow}>
        <View style={styles.tag}><Text style={styles.tagText}>Bachata</Text></View>
      </View>
    </View>
    <TouchableOpacity onPress={onFavoritePress}>
      <Text style={{ fontSize: 24 }}>{isFavorite ? '❤️' : '💚'}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#FFF', margin: 10, padding: 12, borderRadius: 8, elevation: 3 },
  image: { width: 80, height: 80, borderRadius: 4 },
  content: { flex: 1, paddingHorizontal: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  date: { color: '#21D393', marginVertical: 4 },
  location: { color: '#888', fontSize: 12 },
  tagRow: { flexDirection: 'row', marginTop: 5 },
  tag: { backgroundColor: '#F0F0F0', padding: 4, borderRadius: 4 },
  tagText: { fontSize: 10, color: '#666' }
});

export default EventCards;