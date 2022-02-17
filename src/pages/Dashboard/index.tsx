import React, {useState, FormEvent} from 'react';
import api from "../../services/api";

import { Container, Title, Form, Cards } from "./style";

interface Character{
    id: string;
    name: string;
    thumbnail:{
        path: string;
        extension: string;
    };
}

const Dashboard: React.FC = () =>{
    const [characters, setNewCharacters] = useState('');
    const [cards, setCard] = useState<Character[]>([]);

    const pesquisarCharacter = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            const response = await api.get(`${characters}/json/`);
            const dadosCharacter = response.data;

            setCard([...cards, dadosCharacter]);
        
        } catch(err){

        }
    }
    return(
        <Container>
            <Title>Pesquise os personagens da Marvel por nome</Title>

            <Form onSubmit={pesquisarCharacter}>
                <input type="text" placeholder="Digite o nome do Super-Heroi desejado" onChange={e => setNewCharacters(e.target.value)}/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Cards>
                {cards.map(card =>(
                    <a href='#'>
                        <p className='id'>{card.id}</p>
                        <div>
                            <strong>{card.thumbnail}</strong>
                            <p>{card.name}</p>
                        </div>
                    </a>
                ))}
            </Cards>
        </Container>
    );

};

export default Dashboard;