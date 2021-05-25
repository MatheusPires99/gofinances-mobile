import React, { useMemo } from 'react';
import { View } from 'react-native';

import { formatToPtBrCurrency } from '../../utils';
import * as S from './styles';

export type CardType = 'deposit' | 'withdraw' | 'total';

type CardProps = {
  type: CardType;
  title: string;
  amount: number;
  description: string;
};

const iconName = {
  deposit: 'arrow-up-circle',
  withdraw: 'arrow-down-circle',
  total: 'dollar-sign',
};

export const Card = ({ type, title, amount, description }: CardProps) => {
  const amountFormatted = useMemo(() => formatToPtBrCurrency(amount), [amount]);

  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={iconName[type]} type={type} />
      </S.Header>

      <View>
        <S.Amount type={type}> {amountFormatted}</S.Amount>
        <S.Description type={type}>{description}</S.Description>
      </View>
    </S.Container>
  );
};
