import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from '../Style';

const Card = ({ property }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: property.imageUrl }} style={styles.propertyImage} />
    <Text style={styles.priceText}>{property.price}</Text>
    <Text style={styles.detailsText}>{property.name}</Text>
    <Text style={styles.detailsAddress}>{property.address}</Text>
    <Text style={styles.detailsCarpet}>
      Carpet Area: {property.carpetArea}                 {property.pricePerSquareFeet}
    </Text>
    <View style={styles.amenities}>
        {property.amenities.map((Amenity, index) => (
          <View key={index} style={{ marginRight: 10 }}>
          {Amenity}
        </View>
        ))}
      </View>
    </View>
  );
};

export default Card;