import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/button";
import { Container, Label, Content, Strong, LabelSignup } from "./styles"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");


    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }
        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    return (
        <Container>
            <Label>SISTEMA DE LOGIN</Label>
            <Content>
                <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />

                    <Input
                    type="passaword"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />

                    <labelError>{error}</labelError>
                    <Button Text="Entrar" onClick={handleLogin} />
                    <LabelSignup>Não tem conta?
                        <Strong>
                            <Link to="/signup">&nbsp;Registre-se</Link>
                        </Strong>
                    </LabelSignup>
            </Content>
        </Container>
    );
    
};

export default Signin;
