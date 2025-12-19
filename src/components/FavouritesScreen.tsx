import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { toggleFavorite } from '../redux/favouriteSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import EventCards from './EventCards';

const FavouritesScreen = () => {
  const favorites = useAppSelector(state => state.favorites.items);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Favourites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCards 
            item={item} 
            isFavorite={true} 
            onFavoritePress={() => dispatch(toggleFavorite(item))} 
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No favorites yet!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  empty: { textAlign: 'center', marginTop: 50, color: '#888' }
});

export default FavouritesScreen;