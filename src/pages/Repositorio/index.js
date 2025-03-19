import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Owner, Loading, BackButton,
  IssuesList, PageActions, FilterList
 } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

export default function Repositorio() {
  const { repositorio } = useParams(); // Use this only once
  const [repo, setRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([
    { state: 'all', label: 'Todas', active: true },
    { state: 'open', label: 'Abertas', active: false },
    { state: 'closed', label: 'Fechadas', active: false },
  ]);

  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(repositorio); // Decodifica o nome do repositório

      try {
        const [repositorioData, issuesData] = await Promise.all([ 
          api.get(`/repos/${nomeRepo}`),
          api.get(`/repos/${nomeRepo}/issues`, {
            params: {
              state: filters.find(f => f.active).state,
              per_page: 5,
              page,
            },
          })
        ]);

        setRepo(repositorioData.data);
        setIssues(issuesData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [repositorio, page, filterIndex]); // Dependências otimizadas para re-renderizar quando necessário

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleFilter(index) {
    // Atualiza o índice do filtro, mantendo a lógica ativa do filtro
    const updatedFilters = filters.map((filter, i) => ({
      ...filter,
      active: i === index,
    }));
    setFilters(updatedFilters);
    setFilterIndex(index);
  }

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color='#000' size={30} />
      </BackButton>
      <Owner>
        <img 
          src={repo.owner.avatar_url} 
          alt={repo.owner.login} 
        />
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>

      <FilterList active={filterIndex}>
        {filters.map((filter, index) => (
          <button
            type='button'
            key={filter.label}
            onClick={() => handleFilter(index)}
          > 
            {filter.label}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                  {issue.title}
                </a>
              </strong>
              {issue.labels.map(label => (
                <span key={String(label.id)}>{label.name}</span>  
              ))}
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button 
          type='button' 
          onClick={() => handlePage('back')} 
          disabled={page < 2}
        >
          Voltar
        </button>

        <button 
          type='button' 
          onClick={() => handlePage('next')}
        >
          Próxima
        </button>
      </PageActions>
    </Container>
  );
}
