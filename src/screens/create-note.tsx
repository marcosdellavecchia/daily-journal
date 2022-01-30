import React, { FunctionComponent, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { H2 } from '../core/typography';
import { PrimaryButton } from '../components/buttons';

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

const EntryTextField = styled.TextInput`
  color: ${Colors.WHITE};
  font-size: 14px;
  font-family: 'open-sans';
`;

/*
 * Create Note screen
 */

export const CreateNote: FunctionComponent<CreateNoteProps> = ({
  navigation,
}) => {
  const [note, setNote] = useState('');

  const saveNote = async () => {
    const value = await AsyncStorage.getItem('NOTES');
    const n = value ? JSON.parse(value) : [];
    n.push(note);
    await AsyncStorage.setItem('NOTES', JSON.stringify(n)).then(() =>
      navigation.navigate('Journal'),
    );
    setNote('');
  };

  return (
    <Container>
      <H2>New journal entry</H2>
      <EntryTextField
        value={note}
        onChangeText={setNote}
        multiline={true}
        autoFocus
        selectionColor={Colors.WHITE}
      />
      <PrimaryButton
        label="Add new entry"
        accessibilityLabel="Add new entry"
        onPress={saveNote}
      />
    </Container>
  );
};
