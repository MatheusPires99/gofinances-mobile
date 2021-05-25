import React from 'react';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.UserInfo>
          <S.UserImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/49207932?v=4',
            }}
          />

          <S.Greetings>
            <S.UserGreeting>Olá,</S.UserGreeting>
            <S.UserName>Matheus</S.UserName>
          </S.Greetings>
        </S.UserInfo>

        <S.PowerIcon />
      </S.Content>
    </S.Container>
  );
};
