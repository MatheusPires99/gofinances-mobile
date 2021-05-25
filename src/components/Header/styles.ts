import { Feather } from '@expo/vector-icons';

import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background: ${theme.colors.primary};
    padding: 0 ${RFValue(24)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const UserInfo = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const UserImage = styled.Image`
  ${() => css`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 10px;
  `}
`;

export const Greetings = styled.View`
  ${() => css`
    margin-left: 16px;
  `}
`;

export const UserGreeting = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const PowerIcon = styled(Feather).attrs({
  name: 'power',
})`
  ${({ theme }) => css`
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.secondary};
  `}
`;
