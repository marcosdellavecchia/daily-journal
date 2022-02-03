import React, { FunctionComponent, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { PrimaryButton, SecondaryButton } from '../components/buttons';
import { Spacer } from '../components/spacer';
import { Dimensions } from 'react-native';

/*
 * Constants
 */

const { width, height } = Dimensions.get('screen');

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

const SingleNoteTextField = styled.TextInput`
  color: ${Colors.WHITE};
  font-size: 14px;
  font-family: 'open-sans';
`;

const SingleNoteContainer = styled.View`
  background-color: ${Colors.DARK_GRAY};
  margin: 8px;
  padding: 10px;
  width: ${width * 0.9}px;
  height: ${height * 0.23}px;
  border-radius: 8px;
`;

/*
 * Journal screen
 */

export const ViewNote: FunctionComponent<ViewNoteProps> = ({
  navigation,
  route,
}) => {
  const { singleNote } = route.params;

  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(`${singleNote}`);

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

  const editNote = async () => {
    const value = await AsyncStorage.getItem('NOTES');
    const parsedValue = value ? JSON.parse(value) : [];
    const editedNoteIndex = parsedValue?.indexOf(singleNote);
    parsedValue[editedNoteIndex] = currentNote;
    await AsyncStorage.setItem('NOTES', JSON.stringify(parsedValue)).then(() =>
      navigation.navigate('Journal'),
    );
    // setNote(`${noteDate} \n \n`);
  };

  return (
    <Container>
      <SingleNoteContainer>
        <SingleNoteTextField
          value={currentNote}
          onChangeText={setCurrentNote}
          multiline={true}
          autoFocus
          selectionColor={Colors.WHITE}
        />
      </SingleNoteContainer>
      <Spacer />
      <PrimaryButton
        label="Edit"
        accessibilityLabel="Edit"
        onPress={editNote}
      />
      <SecondaryButton
        label="Delete"
        accessibilityLabel="Delete"
        onPress={deleteNote}
      />
    </Container>
  );
};
