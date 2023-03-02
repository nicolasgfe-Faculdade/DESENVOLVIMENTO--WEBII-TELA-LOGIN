import styled from "styled-components";
import logo from './Images/logo.svg';
import appleIcon from './Images/apple.png';
import facebookIcon from './Images/facebook.png';
import googleIcon from './Images/google.png';


const Container = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    align-items: center;
`;

const LeftFild = styled.div`
    width: 50VW;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    
    
    background-color: #00a5f1;
    opacity: 0.85;
`;

const Imagem = styled.img`
    width: 90%;

`;

const RightFild = styled.div`
    width: 50VW;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = styled.body`
    display: flex;
    flex-direction: column;
    width: 24vw;
    font-family: "roboto";
    font-weight: 300;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 500;
    font-family: "Roboto";

`;

const Label = styled.label`
    text-align: left;
    font-size: 18px;
    font-weight: 20px;
    margin-bottom: 4px;
    border-radius: 5px;
`;

const InputTextField = styled.input`
    width: 100%;
    height: 6vh;
    background-color: #cccccc;
    border: 0;
    border-radius: 5px;
    padding-left: 3%;
    opacity: 0.35;
`;

const DivOptions = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;

const LembrarSenha = styled.div`
    margin-top: 5px;
    text-align: left;
    justify-content: center;
    font-size: 14px;
`;

const EsqueceuSenha = styled.a`
    display: flex;
    font-size: 14px;
    font-weight: 20px;
    color: #00a5f1;
    text-decoration: none;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    margin-top: 3vh;
    font-size: 20px;
    background-color: #00a5f1;
    border: 0;
    color: #ffffff;
    border-radius: 5px;
    &:hover{
        opacity: 0.6;
    }
`;

const DivRecovery = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

const InscreverSe = styled.a`
    display: flex;
    font-size: 16px;
    font-weight: 20px;
    color: #00a5f1;
    margin-left: 1vw;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    margin-top: 20px;
    width: 1    00%;
    font-size: 22px;
    color: #00a5f1;

`;

const OpenOption = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    
`;

const Icon = styled.img`
    margin-top: 3vh;
    display: flex;
    align-items: center;
    width: 4vw;
`;



export function Login() {
    return (
        <Container>
            <LeftFild>
                <Imagem src={logo}></Imagem>
            </LeftFild>
            <RightFild>
                <Form>
                    <Title>LOGIN</Title>
                    <Label>Username</Label>
                    <InputTextField type="text" placeholder="@mail.com" ></InputTextField>
                    <Label>Password</Label>
                    <InputTextField type="password" placeholder="Password"></InputTextField>
                    <DivOptions>
                        <LembrarSenha>
                            <input type="checkbox"></input>
                            Remember me
                        </LembrarSenha>
                        <EsqueceuSenha href="https://www.instagram.com/nicolasgfe/">Esqueceu a Senha?</EsqueceuSenha>
                    </DivOptions>

                    <Button type="button">Entrar</Button>
                    <DivRecovery>
                    <Label> Não Tem Uma Conta?</Label>
                    <InscreverSe href="https://www.instagram.com/nicolasgfe/">Inscrever-se</InscreverSe>
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