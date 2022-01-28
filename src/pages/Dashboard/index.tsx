import React from "react";

import { Container, Title, Form } from "./style";
import api from "../../services/api";

const Dashboard: React.FC = () =>{
    const [characters, set characters] = useSate<Character []> ([]);
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