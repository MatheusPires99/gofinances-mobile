import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.background};

    flex: 1;
  `}
`;

export const Cards = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 8,
  },
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;
