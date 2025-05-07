import styled from "styled-components";

type BotaoProps = {
  main: boolean;
  fontSize?: string;
};
const Button = styled.button<BotaoProps>`
  background-color: ${(props) => (props.main ? "green" : " blue")};
  font-size: ${(props) => props.fontSize || "16px"};
`;

const WarningButton = styled(Button)`
  background-color: red;
  color: #fff;
  span:hover {
    text-decoration: line-through;
    cursor: pointer;
  }
`;

function Teste() {
  return (
    <>
      <Button fontSize="48px" main>
        Clique aqui
      </Button>
      <Button fontSize="14px" main={false}>
        Enviar
      </Button>
      <WarningButton as="a" main={false}>
        <span>Não Clique aqui</span>
      </WarningButton>
    </>
  );
}

export default Teste;
