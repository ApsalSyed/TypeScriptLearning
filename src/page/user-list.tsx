import {useQuery} from '@tanstack/react-query';
import {FlatList, View, StyleSheet, Image} from 'react-native';
import {fetchUser, User} from '../api/api';
import {Text} from 'react-native-paper';

const UserList = () => {
  const {data, isLoading, error} = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUser,
  });

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const renderItem = ({item}: {item: User}) => (
    <View style={styles.itemContainer}>
      {item.image ? (
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitial(item.firstName)}</Text>
        </View>
      )}

      {/* User Details */}
      <Text style={styles.name}>{item.firstName}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.details}>Height: {item.height} cm</Text>
      <Text style={styles.details}>Blood Group: {item.bloodGroup}</Text>
    </View>
  );

  if (isLoading) {
    return <Text style={styles.message}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.message}>Failed to load users.</Text>;
  }

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    alignSelf: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
    backgroundColor: 'pink',
  },
  avatarText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  details: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 6,
  },
  message: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 40,
    color: '#ff4040',
  },
});

export default UserList;
