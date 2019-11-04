import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Pengajuan from '../screens/Pengajuan';
import Journey from '../screens/Journey';
import Pembayaran from '../screens/Pembayaran';
import More from '../screens/More';

const BottomNavigation = createBottomTabNavigator(
  {
    Home: Home, 
    Pengajuan: Pengajuan,
    Journey: Journey,
    Pembayaran: Pembayaran,
    More: More,
  });

export default createAppContainer(BottomNavigation);