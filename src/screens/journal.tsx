import React, { FunctionComponent, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { Body1, H2 } from '../core/typography';

/*
 * Types
 */

interface CreateNoteProps {
  navigation: any;
}

/*
 * Styled components
 */

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: flex-start;
  padding-top: 25px;
`;

/*
 * Journal screen
 */

export const Journal: FunctionComponent<CreateNoteProps> = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getNotes();
    }, []),
  );

  const getNotes = () => {
    AsyncStorage.getItem('NOTES').then((notes) => {
      setNotes(JSON.parse(notes || ''));
    });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ViewNote', {
          singleNote: item,
        });
      }}
    >
      <Body1>{item}</Body1>
    </TouchableOpacity>
  );

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('CreateNote')}>
        <H2>Add new entry</H2>
      </TouchableOpacity>
      <FlatList
        data={notes.reverse()}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.index}
      />
    </Container>
  );
};
