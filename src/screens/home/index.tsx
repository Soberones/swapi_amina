import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@react-navigation/native';

import Card from '../../components/card';
import { PersonType, getPeople } from '../../redux/actions/getPeople';

type peopleType = {
  peopleLoading: boolean;
  people: any;
};

export default function Home() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const states = useSelector((state: peopleType) => state.people);
  const { people, peopleLoading } = states;

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  const renderItem = ({ item }: { item: PersonType }) => {
    return (
      <Card
        name={item.name}
        birth_year={item.birth_year}
        height={item.height}
        gender={item.gender}
      />
    );
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      {peopleLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={people}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  divider: {
    height: 2,
  },
});
