import React from 'react';
import { useState, useCallback } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, SubmitButton, Form, List, DeleteButon } from './style';
import api from '../../services/api';

export default function Main(){
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e)=> {
    e.preventDefault();
    
    async function submit(){
      setLoading(true);
      try {
        const response = await api.get(`repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };

        setRepositorios([...repositorios, data]);
        setNewRepo('');
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }

      
    }
    submit();

  }, [newRepo, repositorios]);


  function handleinputChange(e){
    setNewRepo(e.target.value);
  }

  function handleDelete(e){
    console.log(e);
  }

  return (
    <Container>
      <h1> 
        <FaGithub size={25} />
        Meu Repositorios 
      </h1>
      <Form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Adicionar Repositorios' 
        value={newRepo}
        onChange={handleinputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color='#FFF' size={14} />
          ) : (
            <FaPlus color='#FFF' size={14} />
          )}
        </SubmitButton>
      </Form>
      
      <List>
        {repositorios.map(repositorio => (
          <li key={repositorio.name}>
            <span>
              <DeleteButon onChange={ ()=> handleDelete(repositorio.name)}>
                <FaTrash size={14} />
              </DeleteButon>
              {repositorio.name}
            </span>
            <FaBars size={20}/>
          </li>
        ))}
      </List>

    </Container>
  );
}