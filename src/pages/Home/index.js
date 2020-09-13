import React from 'react';
import styled from 'styled-components';

// Project imports

import BackgroundImage from '../../images/background-home.svg';
import { colors } from '../../styles/theme';
import { H4, P2 } from '../../styles/fonts';
// Styled components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: hidden;
  position: relative;
`;


const Image = styled.img`
  position: absolute;
  z-index: -5px;
  width: 100%;
  height: 100%;
  right: 0px;
  bottom: -150px;
`;

const LoginContent = styled.div`
  position: relative;
  z-index: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  background: white;


  width: 60%;
  height: 60%;

  max-width: 350px;
  max-height: 330px;

  padding: 34px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(H4)`
  background: linear-gradient(${colors.greenDarker}, ${colors.greenLighter});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoginDescription = styled(P2)`
  margin-top: 22px;
  background: linear-gradient(${colors.greenDarker}, ${colors.greenLighter});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.div`
  margin-top: 38px;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > input + input {
    margin-top: 22px;
  }
`;

const Input = styled.input`
  padding: 0px 24px;
  width: 100%;
  height: 30px;
  border-radius: 4px;
  background: #FBFBFF;
  border: 2px solid #C4C4C4;
  font-size: 10px;

  &::placeholder {
    color: ${colors.grayDarker};
    vertical-align: middle;
  }
`;

const Button = styled.button`
  margin-top: 28px;
  background: ${colors.greenDarker};
  color: ${colors.white};
  border-radius: 20px;
  height: 30px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function HomePage() {
  return (
    <Container>
      <Image src={BackgroundImage} />
      <LoginContent>
        <Title>BillsCamp</Title>
        <LoginDescription>Gerencie suas contas. <br/> Gerencie o que interessa</LoginDescription>
        <Form>
          <Input placeholder="seu e-mail" />
          <Input placeholder="sua senha secreta" />
          <Button>Entrar</Button>
        </Form>
      </LoginContent>

    </Container>
  )
}

export default HomePage;