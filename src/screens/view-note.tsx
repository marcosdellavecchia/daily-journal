import React, { FunctionComponent, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { Body1 } from '../core/typography';
import { SecondaryButton } from '../components/buttons';
import { Spacer } from '../components/spacer';

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

const SingleNoteContainer = styled.View`
  background-color: ${Colors.DARK_GRAY};
  margin: 8px;
  padding: 10px;
  width: 90%;
  height: 30%;
  border-radius: 8px;
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
      <SingleNoteContainer>
        <Body1>{singleNote}</Body1>
      </SingleNoteContainer>
      <Spacer />
      <SecondaryButton
        label="Delete"
        accessibilityLabel="Delete"
        onPress={deleteNote}
      />
    </Container>
  );
};
