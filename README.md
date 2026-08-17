# GitHub Repo Tracker 🚀

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=fff)](https://styled-components.com)
[![GitHub API](https://img.shields.io/badge/GitHub%20API-181717?style=for-the-badge&logo=github&logoColor=fff)](https://docs.github.com/en/rest)

Uma aplicação **Single Page Application (SPA)** moderna desenvolvida em React para buscar, rastrear e gerenciar detalhes de repositórios diretamente da API oficial do GitHub. O projeto foi redesenhado com uma interface imersiva inspirada na cultura *Deep Tech* (Verde Tecnológico) e otimizado com recursos de usabilidade avançada para compor meu portfólio.

---

## 💡 Recursos de Destaque & UX

- **Painel Didático Interativo:** Inclusão de um contêiner de legendas e instruções detalhadas para orientar o usuário sobre o padrão de busca (`dono/projeto`).
- **Atalhos de Seleção Rápida (Quick Select):** Tags interativas clicáveis (`facebook/react`, `vuejs/vue`) que preenchem o campo de input automaticamente, acelerando o teste de usabilidade por recrutadores.
- **Tratamento de Strings Robusto:** Validação nativa com métodos `.trim()` e `.toLowerCase()` para mitigar erros de espaçamento acidental ou duplicação de repositórios por diferença de caixa.
- **Persistência de Dados Inteligente:** Sincronização segura dos estados via React Hooks (`useEffect`) com o `localStorage` do navegador, mantendo o histórico do usuário mesmo após o encerramento da sessão.

---

## 🎨 Arquitetura de Design: Verde Tecnológico

A identidade visual foi completamente reformulada para expressar uma estética moderna de desenvolvimento de software:
- **Cores de Contraste Elevado:** Substituição da paleta clara por um fundo escuro profundo (`#0b0f19`) e cartões grafite (`#111827`) que reduzem a fadiga ocular.
- **Destaques Neon:** Aplicação do tom Verde Cyberpunk (`#00ff87`) em títulos, bordas ativas e botões de ação com sombras esmaecidas em efeito brilhante (*glow*).
- **Responsividade e Alinhamento:** Centralização vertical absoluta (`min-height: 100vh`) utilizando CSS Flexbox estruturado via Styled Components.

---

## 🛠️ Tecnologias Utilizadas

- **ReactJS (Hooks):** Gerenciamento de ciclo de vida e estados com `useState`, `useEffect` e memorização de callbacks com `useCallback`.
- **Styled Components:** Estilização baseada em componentes (*CSS-in-JS*) com injeção de propriedades dinâmicas e animações por `keyframes`.
- **React Icons:** Biblioteca de vetores para carregamento de ícones modernos do ecossistema de código aberto.
- **Axios / GitHub API:** Consumo assíncrono e integrado de serviços REST.

---

## 🔧 Como Executar a Aplicação Localmente

### Pré-requisitos
Certifique-se de ter o gerenciador de pacotes [Node.js / NPM](https://nodejs.org) instalado em seu sistema de arquivos.

### Execução

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/leo-gomes-dev/api-github-repo.git
   ```
2. **Entre na pasta raiz:**
   ```bash
   cd NOME_DO_SEU_REPOSITORIO
   ```
3. **Instale os módulos de dependência:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento local:**
   ```bash
   npm start
   ```
5. Acesse `http://localhost:3000` no seu navegador para testar a ferramenta.

---

## 🔗 Conecte-se Comigo

Se você gostou deste projeto ou quer trocar ideias sobre desenvolvimento de software, fique à vontade para me encontrar em qualquer um dos meus canais oficiais:

- 🌐 [Website Oficial](https://leogomesdev.com)
- 🐙 [GitHub](https://github.com)
- 💬 [Discord](https://discord.com)
- 📸 [Instagram](https://instagram.com)
- 💼 [LinkedIn](https://linkedin.com)

---
Desenvolvido por **Leo Gomes Developer** 🚀
