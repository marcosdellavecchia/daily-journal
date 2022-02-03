import React, { FunctionComponent, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { Body1 } from '../core/typography';
import PlusIcon from '../../assets/icons/plus.svg';
import { EmptyNoteMessage } from '../components/empty-note-message';

/*
 * Constants
 */

const { width } = Dimensions.get('screen');

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
  justify-content: center;
  padding-top: 15px;
`;

const NoteContainer = styled.View`
  background-color: ${Colors.DARK_GRAY};
  width: ${width * 0.9}px;
  margin-vertical: 8px;
  padding: 10px;
  border-radius: 8px;
`;

const CreateNoteButtonContainer = styled.TouchableOpacity`
   position: absolute;
   bottom: 10%;
   right: 10%;
   shadow-color: #000000;
   shadow-offset: {width: 3, height: 3};
   shadow-opacity: 0.5;
   shadow-radius: 3px;
   elevation: 5;
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
        navigation.navigate('NoteStack', {
          screen: 'ViewNote',
          params: {
            singleNote: item,
          },
        });
      }}
    >
      <NoteContainer>
        <Body1>{item}</Body1>
      </NoteContainer>
    </TouchableOpacity>
  );

  return (
    <Container>
      {notes.length === 0 ? (
        <EmptyNoteMessage />
      ) : (
        <FlatList
          data={notes.reverse()}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
      <CreateNoteButtonContainer
        onPress={() =>
          navigation.navigate('NoteStack', {
            screen: 'CreateNote',
          })
        }
      >
        <PlusIcon width={50} height={50} fill={Colors.ACCENT} />
      </CreateNoteButtonContainer>
    </Container>
  );
};
