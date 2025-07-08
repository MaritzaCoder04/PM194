import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const CATEGORIES = ['Ficcion', 'Historia', 'Tecnologia'];
const API_KEY = ''; 

export default function App() {
  const [booksByAuthor, setBooksByAuthor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      fetchBooks(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchBooks = async (category) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40${API_KEY ? `&key=${API_KEY}` : ''}`;
      const res = await fetch(url);
      const json = await res.json();

      if (!json.items || json.items.length === 0) {
        setErrorMsg('No se encontraron libros');
        setBooksByAuthor([]);
        setLoading(false);
        return;
      }

      const grouped = {};
      json.items.forEach((item) => {
        const book = {
          id: item.id,
          title: item.volumeInfo.title || 'Sin título',
          authors: item.volumeInfo.authors || ['Desconocido'],
          description: item.volumeInfo.description || 'Sin descripción',
          publisher: item.volumeInfo.publisher || 'Sin editorial',
          thumbnail: item.volumeInfo.imageLinks?.thumbnail || null,
        };

        book.authors.forEach((author) => {
          if (!grouped[author]) grouped[author] = [];
          grouped[author].push(book);
        });
      });

      // Agrupar autores con 2+ libros
      let filteredSections = Object.keys(grouped)
        .filter((author) => grouped[author].length >= 2)
        .map((author) => ({
          title: author,
          data: grouped[author],
        }));

      // Asegurar al menos 12 libros totales
      let totalBooks = filteredSections.reduce((acc, sec) => acc + sec.data.length, 0);
      if (totalBooks < 12) {
        const singleAuthors = Object.keys(grouped)
          .filter((author) => grouped[author].length === 1)
          .map((author) => ({
            title: author,
            data: grouped[author],
          }));

        for (const section of singleAuthors) {
          filteredSections.push(section);
          totalBooks += section.data.length;
          if (totalBooks >= 12) break;
        }
      }

      setBooksByAuthor(filteredSections);
    } catch (error) {
      setErrorMsg('Error de conexión');
      setBooksByAuthor([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Books por Categoría</Text>

      <View style={styles.buttonGroup}>
        {CATEGORIES.map((cat) => (
          <Button key={cat} title={cat} onPress={() => setSelectedCategory(cat)} />
        ))}
      </View>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {errorMsg !== '' && <Text style={styles.error}>{errorMsg}</Text>}

      {!loading && booksByAuthor.length > 0 && (
        <SectionList
          sections={booksByAuthor}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookItem item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      )}
    </View>
  );
}

function BookItem({ item }) {
  const [expanded, setExpanded] = useState(false);
  const shortDesc =
    item.description.length > 150
      ? item.description.slice(0, 150) + '...'
      : item.description;

  return (
    <ScrollView style={styles.bookItem}>
      {item.thumbnail ? (
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      ) : (
        <Text>No hay portada disponible</Text>
      )}
      <Text style={styles.bookTitle}>{item.title}</Text>

      <Text style={styles.bookDesc}>
        {expanded ? item.description : shortDesc}
        {item.description.length > 150 && (
          <Text
            style={{ color: 'blue' }}
            onPress={() => setExpanded(!expanded)}
          >
            {expanded ? ' Leer menos' : ' Leer más'}
          </Text>
        )}
      </Text>

      <Text style={styles.bookPublisher}>Editorial: {item.publisher}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#f2f2f2',
    padding: 5,
    marginTop: 10,
  },
  bookItem: {
    backgroundColor: '#eef',
    marginBottom: 5,
    padding: 10,
    borderRadius: 6,
  },
  thumbnail: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  bookDesc: {
    fontSize: 13,
    marginVertical: 5,
  },
  bookPublisher: {
    fontStyle: 'italic',
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});
