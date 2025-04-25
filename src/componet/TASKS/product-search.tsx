import {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Checkbox, Text, TextInput} from 'react-native-paper';

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
    stock: false,
    id: 4,
  },
];
const ProductWithSearch = () => {
  const [search, setSearch] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const filterProduct = PRODUCT.filter(item => {
    const matcheSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchStock = item.stock === checked;
    return matcheSearch && matchStock;
  });

  const toggleCheckedFiter = () => {
    setChecked(!checked);
  };

  const rederItem = ({item}: {item: ProductProps}) => {
    return (
      <View>
        <Text>Model : {item.name}</Text>
        <Text>Price : {item.price}</Text>
        <Text>In Stock : {item.stock ? 'Yes' : 'No'}</Text>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={toggleCheckedFiter}
        />
        <Text>Only In Stock</Text>
      </View>

      <Text>Total : {filterProduct.length}</Text>
      {filterProduct.length === 0 ? (
        <Text>No Products Found</Text>
      ) : (
        <FlatList
          data={filterProduct}
          keyExtractor={item => item.id.toString()}
          renderItem={rederItem}
        />
      )}
    </View>
  );
};

export default ProductWithSearch;
