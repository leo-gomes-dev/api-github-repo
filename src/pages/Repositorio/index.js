import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

export default function Repositorio() {
  const { repositorio } = useParams(); // Use this only once
  const [repo, setRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(repositorio); // Decodifica o nome do repositório
      
      try {
        const [repositorioData, issuesData] = await Promise.all([ 
          api.get(`/repos/${nomeRepo}`),
          api.get(`/repos/${nomeRepo}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
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
  }, [repositorio]); // Make sure to re-run the effect when `repositorio` changes

  if (loading) {
    return <div>Loading...</div>; // You can customize the loading state message
  }

  return (
    <Container style={{ color: '#fff' }}>
      {/* Render your content here */}
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>

      <h2>Open Issues</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
