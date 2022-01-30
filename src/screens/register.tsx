import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

import { Colors } from '../core/colors';
import { Body2 } from '../core/typography';
import { PrimaryButton } from '../components/buttons';
import { Spacer } from '../components/spacer';

/*
 * Styled components
 */

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: center;
`;

const HomeImage = styled.Image`
  height: 225px;
  width: 225px;
`;

const InputContainer = styled.View`
  align-items: center;
  background-color: ${Colors.DARK_GRAY};
  border-radius: 30px;
  width: 70%;
  height: 45px;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  padding: 10px;
  margin-left: 20px;
  color: ${Colors.WHITE};
`;

const PrivacyDisclaimerContainer = styled.TouchableOpacity`
  width: 70%;
`;

/*
 * Register screen
 */

export const Register: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <HomeImage source={require('../../assets/images/home-logo.webp')} />
      <Spacer />
      <InputContainer>
        <Input
          placeholder="Your email"
          placeholderTextColor={Colors.WHITE}
          onChangeText={(email) => setEmail(email)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Your password"
          placeholderTextColor={Colors.WHITE}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </InputContainer>
      <PrivacyDisclaimerContainer>
        <Body2 style={{ textAlign: 'center' }}>
          By pressing "Create Account" you accept our privacy policy.
        </Body2>
      </PrivacyDisclaimerContainer>
      <Spacer size="l" />
      <PrimaryButton
        label="Create Account"
        accessibilityLabel="Create Account"
        onPress={() => {}}
      />
    </Container>
  );
};
