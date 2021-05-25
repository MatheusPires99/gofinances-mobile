import React from 'react';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Container>
      <Header />

      <S.Cards horizontal showsHorizontalScrollIndicator={false}>
        <Card
          type="deposit"
          title="Entradas"
          amount={17400}
          description="Última entrada dia 13 de abril"
        />
        <Card
          type="withdraw"
          title="Saídas"
          amount={1259}
          description="Última saída dia 03 de abril"
        />
        <Card
          type="total"
          title="Total"
          amount={16141}
          description="01 à 16 de abril"
        />
      </S.Cards>
    </S.Container>
  );
};
