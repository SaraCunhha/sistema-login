import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/button";
import { Container, Label, Content } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError ("Os emails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
  
    navigate("/");

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
        type="email"
        placeholder="Confirme seu email"
        value={emailConf}
        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
        type="password"
        placeholder="Digite sua senha"
        onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <labelError>{error}</labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
          Já tem uma conta?
          
            <Link to="/">&nbsp;Entre</Link>
        
       
      </Content>
    </Container>
 
  );
};
export default Signup;
