import React from 'react';
import {View, ScrollView} from 'react-native';
import Card from './Card/Card';
import { Drink, Food, Gym, Parking } from '../assets/svgImages';


const CommercialScreen = () => {

  const properties = [
    {
      id: 1,
      name: 'Birla Niyaara',
      price: '₹ 2CR-3CR',
      imageUrl:
        'https://images.unsplash.com/photo-1608053246173-86582477ca76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbW1lcmNpYWwlMjByZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      address: '14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025',
      pricePerSquareFeet: '₹ 79.9/sq.f',
      carpetArea: '1022 sq.ft',
      amenities:[<Gym/>,
      <Food/>,
      <Parking/>,
      <Drink/>,] ,
    },
    {
      id: 2,
      name: 'Birla Niyaara',
      price: '₹ 2CR-3CR',
      imageUrl:
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tbWVyY2lhbCUyMHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      address: '14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025',
      pricePerSquareFeet: '₹ 79.9/sq.f',
      carpetArea: '1022 sq.ft',
      amenities:[<Gym/>,
      <Food/>,
      <Parking/>,
      <Drink/>,] ,
    },
    {
      id: 3,
      name: 'Birla Niyaara',
      price: '₹ 2CR-3CR',
      imageUrl:
        'https://images.unsplash.com/photo-1614969263964-f381e32b337d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWd1ZGF2fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
      address: '14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025',
      pricePerSquareFeet: '₹ 79.9/sq.f',
      carpetArea: '1022 sq.ft',
      amenities: [<Gym/>,
      <Food/>,
      <Parking/>,
      <Drink/>,],
    },
    {
      id: 4,
      name: 'Birla Niyaara',
      price: '₹ 2CR-3CR',
      imageUrl:
        'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWd1ZGF2fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
      address: '14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025',
      pricePerSquareFeet: '₹ 79.9/sq.f',
      carpetArea: '1022 sq.ft',
      amenities:[<Gym/>,
      <Food/>,
      <Parking/>,
      <Drink/>,] ,
    },
    {
      id: 5,
      name: 'Birla Niyaara',
      price: '₹ 2CR-3CR',
      imageUrl:
        'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWd1ZGF2fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
      address: '14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025e',
      pricePerSquareFeet: '₹ 79.9/sq.f',
      carpetArea: '1022 sq.ft',
      amenities:[<Gym/>,
      <Food/>,
      <Parking/>,
      <Drink/>,],
    },
    {
      id: 6,
      name: 'Birla Niyaara',
      price: '₹ 2CR-3CR',
      imageUrl:
        'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWd1ZGF2fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
      address: '14, Dr Annie Besant Rd, Century Bazaar, Prabhadevi, Mumbai, Maharashtra 400025e',
      pricePerSquareFeet: '₹ 79.9/sq.f',
      carpetArea: '1022 sq.ft',
      amenities:[<Gym/>,
      <Food/>,
      <Parking/>,
      <Drink/>,] ,
    }];
  

  return (
    <ScrollView >
      <View style={{backgroundColor:'#fbf8f0'}}>
      {properties.map((property) => (
      <Card key={property.id} property={property} />
      ))}
      
     
      </View>
    </ScrollView>
  );
};

export default CommercialScreen;
