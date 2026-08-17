import React from "react";
import { useState, useCallback, useEffect } from "react";
import {
  FaGithub,
  FaPlus,
  FaSpinner,
  FaBars,
  FaTrash,
  FaGlobe,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  AppWrapper,
  Container,
  SubmitButton,
  Form,
  List,
  DeleteButton,
  InstructionsContainer,
  ExamplesGrid,
  TagExample,
  FooterContainer,
  SocialLinks,
} from "./style";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Buscar dados no localStorage
  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");
    if (repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  }, []);

  // Salvar alterações no localStorage de forma segura
  useEffect(() => {
    try {
      localStorage.setItem("repos", JSON.stringify(repositorios));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [repositorios]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);
        try {
          if (newRepo.trim() === "") {
            throw new Error("Você precisa indicar um repositório");
          }

          const response = await api.get(`repos/${newRepo.trim()}`);

          const hasRepo = repositorios.find(
            (repo) => repo.name.toLowerCase() === newRepo.trim().toLowerCase(),
          );

          if (hasRepo) {
            throw new Error("Repositório Duplicado");
          }

          const data = {
            name: response.data.full_name,
          };

          setRepositorios((prevRepos) => [...prevRepos, data]);
          setNewRepo("");
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },
    [newRepo, repositorios],
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
    [repositorios],
  );

  // Função para preencher o input automaticamente ao clicar na legenda de exemplo
  const handleQuickSelect = useCallback((repoName) => {
    setNewRepo(repoName);
    setAlert(null);
  }, []);

  return (
    <AppWrapper>
      <Container>
        <h1>
          <FaGithub size={25} />
          Meus Repositórios
        </h1>

        {/* LEGENDA DIDÁTICA */}
        <InstructionsContainer>
          <p>
            Digite o <strong>usuário/nome-do-repositório</strong> desejado para
            rastrear os detalhes da API do GitHub.
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#9ca3af",
              marginBottom: "6px",
            }}
          >
            Exemplos práticos (Clique para testar):
          </p>
          <ExamplesGrid>
            <TagExample onClick={() => handleQuickSelect("facebook/react")}>
              facebook/react
            </TagExample>
            <TagExample onClick={() => handleQuickSelect("vuejs/vue")}>
              vuejs/vue
            </TagExample>
            <TagExample onClick={() => handleQuickSelect("angular/angular")}>
              angular/angular
            </TagExample>
            <TagExample
              onClick={() =>
                handleQuickSelect("styled-components/styled-components")
              }
            >
              styled/components
            </TagExample>
          </ExamplesGrid>
        </InstructionsContainer>

        <Form onSubmit={handleSubmit} $error={alert}>
          <input
            type="text"
            placeholder="Adicionar Repositório (ex: dono/projeto)"
            value={newRepo}
            onChange={handleinputChange}
          />

          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#0b0f19" size={14} />
            ) : (
              <FaPlus color="#0b0f19" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositorios.map((repositorio) => (
            <li key={repositorio.name}>
              <span>
                <DeleteButton onClick={() => handleDelete(repositorio.name)}>
                  <FaTrash size={14} />
                </DeleteButton>
                {repositorio.name}
              </span>
              <Link to={`/repositorio/${encodeURIComponent(repositorio.name)}`}>
                <FaBars size={20} />
              </Link>
            </li>
          ))}
        </List>
      </Container>

      {/* FOOTER DE CRÉDITOS TECNOLÓGICO */}
      <FooterContainer>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://leogomesdev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leo Gomes Developer
          </a>
        </p>
        <SocialLinks>
          <a
            href="https://leogomesdev.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Website Oficial"
          >
            <FaGlobe size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
          >
            <FaDiscord size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </SocialLinks>
      </FooterContainer>
    </AppWrapper>
  );
}
