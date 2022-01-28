import React from "react";

import { Container, Title, Form } from "./style";

const Dashboard: React.FC = () =>{
    return(
        <Container>
            <Title>Pesquise os personagens da Marvel por nome</Title>

            <Form>
                <input type="text" placeholder="Digite o nome do Super-Heroi desejado" />
                <button type="submit">Pesquisar</button>
            </Form>
        </Container>
    );

};

export default Dashboard;