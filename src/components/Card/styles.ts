import { Feather } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { CardType } from '.';

type TypeProps = {
  type: CardType;
};

export const Container = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    width: ${RFValue(300)}px;
    background: ${type === 'total'
      ? theme.colors.secondary
      : theme.colors.shape};
    border-radius: 5px;
    padding: 18px 24px ${RFValue(42)}px;
    margin-right: 16px;
  `}
`;

export const Header = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text};
  `}
`;

export const Icon = styled(Feather)<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(32)}px;

    ${type === 'deposit' &&
    css`
      color: ${theme.colors.success};
    `}

    ${type === 'withdraw' &&
    css`
      color: ${theme.colors.attention};
    `}

    ${type === 'total' &&
    css`
      color: ${theme.colors.shape};
    `}
  `}
`;

export const Amount = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.title};
    margin-top: 40px;
  `}
`;

export const Description = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text};
  `}
`;
