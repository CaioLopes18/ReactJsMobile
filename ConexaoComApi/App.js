import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'; 

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?s=spider%20man&apikey=1cd66749');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.Search); // Acessar a lista de filmes
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Função para dividir a lista de filmes em pares
  const getPairs = (items) => {
    const pairs = [];
    for (let i = 0; i < items.length; i += 2) {
      pairs.push(items.slice(i, i + 2));
    }
    return pairs;
  };

  const moviePairs = getPairs(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Filmes:
      </Text>
      <ScrollView>
        {moviePairs.map((pair, pairIndex) => (
          <View key={pairIndex} style={styles.row}>
            {pair.map((movie, index) => (
              <View key={index} style={styles.movieContainer}>
                <Image 
                  style={styles.moviePoster}
                  source={{ uri: movie.Poster }}
                />
                <Text style={styles.movieTitle}>
                  {movie.Title}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  movieContainer: {
    alignItems: 'center',
    width: '48%', // Ajusta a largura para caber duas imagens por linha
  },
  moviePoster: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  movieTitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});
