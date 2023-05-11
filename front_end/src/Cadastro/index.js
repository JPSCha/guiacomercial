/**
 * A função é um componente React para uma página de registro de usuário com campos de formulário para nome, email,
 * CPF, senha e confirmação de senha. 
 * @returns Um componente que renderiza um formulário de registro com campos de entrada para email, nome, CPF,
 * senha e confirmação de senha, bem como um botão para enviar o formulário e um link para a página de login. O componente
 * também inclui variáveis de estado e funções para lidar com a entrada do usuário e a submissão do formulário. 
*/


import { CadastroStyled, ButtonStyled, AreaHome, AreaCadastro, ImgComercio, BackHome, FormCadastro, LogoSite, TextLogin } from "./styles";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export default function Login() {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  
  function pegarValores(event){
    setNome(event.target.value)
    setEmail(event.target.value)
    setCpf(event.target.value)
    setSenha(event.target.value)
    setSenhaConfirm(event.target.value)
    console.log(nome,email,cpf,senha)

  }

  function cadastrarUsuario(event){
    event.preventDefault()
    if(senhaConfirm !== senha){
      alert("As senhas não são iguais")
    }

  }
  return (
    <>
      <CadastroStyled>
        <AreaHome>
          <ImgComercio />
          <Link to="/login"><p>Já possue login? Clique aqui.</p></Link>
        </AreaHome>
        <AreaCadastro>
          <BackHome>
            <p><Link to="/login"><IoIosArrowBack size={20} /></Link></p>
          </BackHome>
          <LogoSite/>
          <FormCadastro>
          <h2>Cadastre-se!</h2>
          <form onClick={cadastrarUsuario}>
            <input onChange={pegarValores} type="email" placeholder="Email:" />
            <input onChange={pegarValores} type="text" placeholder="Nome completo:" />
            <input onChange={pegarValores} type="text" placeholder="CPF:" />
            <input onChange={pegarValores} type="password" placeholder="Senha:" />
            <input onChange={pegarValores} type="password" placeholder="Confirme sua Senha:" />
          </form>
          <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
          <TextLogin>Já possui login? Clique aqui.</TextLogin>
          </FormCadastro>
        </AreaCadastro>
      </CadastroStyled>
    </>
  )
}
