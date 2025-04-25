import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {
  Text,
  TextInput,
  Card,
  Title,
  Paragraph,
  Divider,
  SegmentedButtons,
} from 'react-native-paper';

interface ProductProps {
  name: string;
  price: number;
  stock: boolean;
  id: number;
}

const PRODUCT: ProductProps[] = [
  {
    name: 'Apple 16 Pro',
    price: 100,
    stock: false,
    id: 1,
  },
  {
    name: 'Google 9A',
    price: 200,
    stock: true,
    id: 2,
  },
  {
    name: 'Samsung 16',
    price: 300,
    stock: false,
    id: 3,
  },
  {
    name: 'OnePlus 8',
    price: 70,
    stock: true,
    id: 4,
  },
];

const ProductWithSearch = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredProducts = PRODUCT.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStock =
      filter === 'all' ||
      (filter === 'inStock' ? product.stock : !product.stock);
    return matchesSearch && matchesStock;
  });

  const renderItem = ({item}: {item: ProductProps}) => (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>${item.price}</Paragraph>
          <Paragraph style={{color: item.stock ? 'green' : 'red'}}>
            {item.stock ? 'In Stock' : 'Out of Stock'}
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Search"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
        left={<TextInput.Icon icon="magnify" />}
      />
      <SegmentedButtons
        value={filter}
        onValueChange={setFilter}
        buttons={[
          {value: 'all', label: 'All'},
          {value: 'inStock', label: 'In Stock'},
          {value: 'outOfStock', label: 'Out of Stock'},
        ]}
      />
      <Text>Total: {filteredProducts.length}</Text>
      <Divider style={{marginBottom: 10}} />
      {filteredProducts.length === 0 ? (
        <Text>No Products Found</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 20}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchInput: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
  },
});

export default ProductWithSearch;
