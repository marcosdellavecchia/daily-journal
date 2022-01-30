import React, { FunctionComponent, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { Body1, H2 } from '../core/typography';
import { SecondaryButton } from '../components/buttons';

/*
 * Types
 */

interface ViewNoteProps {
  navigation: any;
  route: any;
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

export const ViewNote: FunctionComponent<ViewNoteProps> = ({
  navigation,
  route,
}) => {
  const [notes, setNotes] = useState([]);
  const { singleNote } = route.params;

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

  const deleteNote = async () => {
    const newNotes = await notes.filter((note) => note !== singleNote);
    await AsyncStorage.setItem('NOTES', JSON.stringify(newNotes)).then(() =>
      navigation.navigate('Journal'),
    );
  };

  return (
    <Container>
      <H2>View Entry</H2>
      <Body1 style={{ fontSize: 22, margin: 20 }}>{singleNote}</Body1>
      <SecondaryButton
        label="Delete"
        accessibilityLabel="Delete"
        onPress={deleteNote}
      />
    </Container>
  );
};
