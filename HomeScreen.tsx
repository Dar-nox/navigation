import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

const products = [
  { id: '1', name: 'Kopi', price: 10 },
  { id: '2', name: 'Kape', price: 20 },
  { id: '3', name: 'Cofi', price: 30 },
];

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { addToCart } = cartContext;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#FFF0F0',
    marginVertical: 5,
    borderRadius: 5,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  productPrice: {
    fontSize: 16,
    color: '#A52A2A',
  },
  button: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cartButton: {
    backgroundColor: '#8B0000',
    padding: 15,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default HomeScreen;
