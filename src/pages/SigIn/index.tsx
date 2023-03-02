import React from 'react';
import logo from '../../assets/logo.svg';
import appleIcon from '../../assets/apple.png';
import facebookIcon from '../../assets/facebook.png';
import googleIcon from '../../assets/google.png';
import { Button, Container, DivOptions, DivRecovery, Forgot, Form, Icon, Imagem, InputTextField, InscreverSe, Label, LeftFild, OpenOption, Options, RememberMe, RightFild, Title } from './styleds';

export const SigIn = () => {
    return (
        <Container>
            <LeftFild>
                <Imagem src={logo}></Imagem>
            </LeftFild>
            <RightFild>
                <Form>
                    <Title>LOGIN</Title>
                    <Label htmlFor='username'>Username</Label>
                    <InputTextField id='username' type="text" placeholder="@mail.com" ></InputTextField>
                    <Label htmlFor='password'>Password</Label>
                    <InputTextField id='password' type="password" placeholder="Password" ></InputTextField>
                    <DivOptions>
                        <RememberMe>
                            <input id='rememberme' type="checkbox"></input>
                            <Label htmlFor='rememberme' >Remember me</Label>
                        </RememberMe>
                        <Forgot href="https://dontpad.com/06cff003d70bce99cae9fc0896e19c1f/">Esqueceu a Senha?</Forgot>
                    </DivOptions>

                    <Button type="button">Entrar</Button>
                    <DivRecovery>
                        <Label> Não Tem Uma Conta?</Label>
                        <InscreverSe href="https://dontpad.com/3df358106dcfd76b0f0ebc24310ea0ae">Inscrever-se</InscreverSe>
                    </DivRecovery>
                    <Options>
                        Logar Com
                    </Options>
                    <OpenOption>
                        <a href="https://facebook.com">
                            <Icon src={facebookIcon}></Icon>

                        </a>
                        <a href="https://google.com">
                            <Icon src={googleIcon}></Icon>
                        </a>
                        <a href="https://apple.com">
                            <Icon src={appleIcon}></Icon>
                        </a>
                    </OpenOption>
                </Form>
            </RightFild>
        </Container>
    );
}