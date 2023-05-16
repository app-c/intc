import React from 'react';
import { Form } from '@unform/mobile';
import * as S from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function LogIn() {
   return (
      <S.Container>
         <S.boxLogo>
            <S.title>LOGO</S.title>
         </S.boxLogo>
         <S.title>ENTRE COM SUA CONTA</S.title>
         <Form style={{ width: '100%' }}>
            <Input
               placeholder="E-mail"
               keyboardType="email-address"
               name="email"
            />
            <Input placeholder="Senha" name="password" secureTextEntry />
            <S.boxForgotPass>
               <S.forgotPass>Esqueci minha senha</S.forgotPass>
            </S.boxForgotPass>
            <Button style={{ marginTop: 30 }} title="ENTRAR" />
         </Form>
      </S.Container>
   );
}
