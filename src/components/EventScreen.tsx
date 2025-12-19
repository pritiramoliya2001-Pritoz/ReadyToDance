import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getEventsApi } from '../api/event.api';
import { setEvents } from '../redux/eventSlice';
import { toggleFavorite } from '../redux/favouriteSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import EventCards from './EventCards';

const EventScreen = () => {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector(state => state.events);
  const favorites = useAppSelector(state => state.favorites.items);

  useEffect(() => {
    getEventsApi().then(res => dispatch(setEvents(res.data.data.events)));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Renzo!</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <EventCards 
            item={item} 
            isFavorite={favorites.some(f => f.id === item.id)}
            onFavoritePress={() => dispatch(toggleFavorite(item))}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});

export default EventScreen;