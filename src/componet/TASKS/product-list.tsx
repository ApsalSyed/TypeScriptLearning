import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

interface ProductListProps {
  title: string;
  price: number;
  inStock: boolean;
}
interface productItemProps {
  product: ProductListProps;
}

const ProductItem = ({product}: productItemProps) => {
  return (
    <View>
      <View>
        <Text style={styles.textStyle}> {product.title} </Text>
        <Text style={styles.textStyle}> {product.price} </Text>
        <Text style={{color: product.inStock ? 'green' : 'red'}}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>
      </View>
    </View>
  );
};

const ProductList = () => {
  const ITEMS = [
    {
      title: 'Apple',
      price: 100,
      inStock: false,
    },
    {
      title: 'Google',
      price: 200,
      inStock: true,
    },
    {
      title: 'Facebook',
      price: 300,
      inStock: false,
    },
  ];

  const renderItem = ({item}: {item: ProductListProps}) => {
    return <ProductItem product={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList<ProductListProps>
        data={ITEMS}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
