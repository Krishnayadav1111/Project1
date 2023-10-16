import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from './Card/Card';
import { Gym, Food, Parking, Drink } from '../assets/svgImages';

const ResidentialScreen = () => {
  const properties = [
    {
      id: 1,
      name: 'Property 1',
      price: '₹1 Crore',
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      address: '456 Elm St, City, State',
      pricePerSquareFeet: '₹30,000/sqft',
      carpetArea: '2000 sqft',
      amenities: [<Gym />, <Food />, <Parking />, <Drink />],
    },
    {
      id: 2,
      name: 'Property 2',
      price: '₹90 Lakh',
      imageUrl: 'https://images.unsplash.com/photo-1565363887735-c63cb07cf57e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=1450&q=80',
      address: '789 Oak St, City, State',
      pricePerSquareFeet: '₹32,000/sqft',
      carpetArea: '1800 sqft',
      amenities: [<Gym />, <Food />, <Parking />, <Drink />],
    },
    {
      id: 3,
      name: 'Property 3',
      price: '₹1.2 Crores',
      imageUrl: 'https://images.unsplash.com/photo-1519380400109-9ef80d934359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      address: '101 Pine St, City, State',
      pricePerSquareFeet: '₹28,000/sqft',
      carpetArea: '2200 sqft',
      amenities: [<Gym />, <Food />, <Parking />, <Drink />],
    },
    {
      id: 4,
      name: 'Property 4',
      price: '₹1.2 Crores',
      imageUrl: 'https://images.unsplash.com/photo-1614969263964-f381e32b337d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
      address: '202 Cedar St, City, State',
      pricePerSquareFeet: '₹30,000/sqft',
      carpetArea: '1900 sqft',
      amenities: [<Gym />, <Food />, <Parking />, <Drink />],
    },
  ];

  return (
    <ScrollView>
      <View style={{backgroundColor:'#fbf8f0'}}>
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ResidentialScreen;
