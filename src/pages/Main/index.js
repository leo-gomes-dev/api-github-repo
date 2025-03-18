import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, SubmitButton, Form, List, DeleteButon } from './style';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Buscar dados no localStorage
  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');
    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  }, []);

  // Salvar alterações no localStorage
  useEffect(() => {
    if (repositorios.length > 0) {
      try {
        localStorage.setItem('repos', JSON.stringify(repositorios));
      } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
      }
    }
  }, [repositorios]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);
        try {
          if (newRepo === '') {
            throw new Error('Você precisa indicar um repositorio');
          }

          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositorios.find((repo) => repo.name === newRepo);

          if (hasRepo) {
            throw new Error('Repositorio Duplicado');
          }

          const data = {
            name: response.data.full_name,
          };

          // Atualizar o estado corretamente utilizando a função de atualização do estado
          setRepositorios((prevRepos) => [...prevRepos, data]);
          setNewRepo('');
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },
    [newRepo, repositorios]
  );

  function handleinputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback(
    (repo) => {
      const find = repositorios.filter((r) => r.name !== repo);
      setRepositorios(find);
    },
    [repositorios]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meu Repositorios
      </h1>
      <Form onSubmit={handleSubmit} $error={alert}>
        <input
          type="text"
          placeholder="Adicionar Repositorios"
          value={newRepo}
          onChange={handleinputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <FaSpinner color="#FFF" size={14} /> : <FaPlus color="#FFF" size={14} />}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map((repositorio) => (
          <li key={repositorio.name}>
            <span>
              <DeleteButon onClick={() => handleDelete(repositorio.name)}>
                <FaTrash size={14} />
              </DeleteButon>
              {repositorio.name}
            </span>
            <Link to={`/repositorio/${encodeURIComponent(repositorio.name)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
