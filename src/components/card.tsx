import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { PersonType } from '../redux/actions/getPeople';

export default function Card(props: PersonType) {
  const { name, birth_year, height, gender } = props;

  const { colors } = useTheme();

  //TODO: WTF solution
  const styles = StyleSheet.create({
    wrapper: {
      borderRadius: 5,
      justifyContent: 'center',
      padding: 10,
    },
    text: {
      fontSize: 15,
      color: colors.text,
    },
  });

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.card }]}>
      <Text style={styles.text}>name :{name}</Text>
      <Text style={styles.text}>gender: {gender}</Text>
      <Text style={styles.text}>birth year: {birth_year}</Text>
      <Text style={styles.text}>height: {height}</Text>
    </View>
  );
}
