# 🕸️ Angular Blog Services: Arquitetura, Performance e Escalabilidade! ✨

E aí, meu 🐙! Este repositório é o *boilerplate* de um **Blog Responsivo** construído do zero, focado em alta performance, arquitetura escalável e na aplicação rigorosa de boas práticas de desenvolvimento Angular.

Meu objetivo com este projeto é criar uma **Single Page Application (SPA)** que sirva como um portfólio de código limpo, demonstrando o domínio de conceitos essenciais como **Services, Observables e arquitetura de componentes**.

Você encontrará:

* **Arquitetura Smart/Dumb:** Separação clara de responsabilidades entre componentes.
* **Services Injetáveis:** Lógica de negócio e busca de dados isoladas e reutilizáveis.
* **Estilização Modular (SCSS):** Uso de estilos encapsulados para evitar conflito global.
* **Tipagem Estrita (TypeScript):** Robustez e segurança no tratamento de dados.

Vem explorar a arquitetura por trás de uma aplicação Angular de alto nível! 😉

---

## 🎥 Veja o Projeto em Ação!

Apesar de ser um projeto de arquitetura, o resultado é um blog limpo e funcional.

[Deploy do Projeto (Link aqui)](https://miriaamaral.github.io/angular-services/)

<img width="1366" height="640" alt="Exemplo da tela inicial do blog" src="[LINK_DO_SEU_PRINT_1]" />

---

## 🚀 Tecnologias Envolvidas

Este projeto foi construído sobre as seguintes tecnologias e frameworks:

* **Angular (SPA):** Framework principal para a construção de Single Page Applications.
* **TypeScript:** Utilizado para tipagem estrita e segurança no desenvolvimento.
* **SCSS (Modular):** Estilização avançada com variáveis e encapsulamento por componente.
* **HttpClient:** Módulo nativo do Angular para comunicação com APIs (consumo de dados).
* **RxJS (Observables):** Tratamento de dados assíncronos e reativos via Services.
* **Git & GitHub:** Controle de versão e hospedagem.

---

### **💡 Visão Arquitetural**

Minha arquitetura é guiada pelo princípio de separação de responsabilidades e otimização:

#### **Estrutura e Services (Singleton)**
* **Services:** Contidos em `src/app/services/`. Injetam o `HttpClient` e definem a lógica para buscar e manipular dados (comentado no código como `PokemonService` nos exemplos).
* **Singleton:** Uso do `@Injectable({ providedIn: 'root' })` para garantir o *tree-shaking* e a utilização do serviço como uma única instância em toda a aplicação.

#### **Padrão de Componentes (Container/Presentation)**
Aplicamos o padrão **Smart/Dumb Components** para maximizar a reusabilidade e testabilidade:

| Tipo de Componente | Função Principal | 
| :--- | :--- |
| **Smart (Container)** | Gerencia o estado, injeta serviços e busca dados da API (Ex: `PostListComponent`). |
| **Dumb (Presentation)** | Focado apenas na renderização da interface, recebe dados via `@Input()` e emite eventos via `@Output()` (Ex: `PostCardComponent`). |

---

### **✅ Próximos Passos e Otimizações (Roadmap)**

Este é um projeto em constante evolução. As próximas implementações planejam solidificar a arquitetura de Front-end de alto nível:

| Implementação | Foco Principal | Significância para o Front-end |
|---|---|---|
| **Lazy Loading** | Performance & Carregamento | Modularizar rotas (Posts, About) para carregamento sob demanda, reduzindo o *bundle* inicial (FCP). |
| **Criação de Tokens de Design** | UI/UX & Consistência | Padronizar todas as variáveis de design (cores, tipografia) em um arquivo SCSS global, como embrião de um *Design System*. |
| **Tipagem Estrita com Interfaces** | Qualidade do Código | Criar e aplicar interfaces (ex: `Post`, `Author`) para todos os objetos de dados manipulados, garantindo a robustez do TypeScript. |
| **PWA (Progressive Web App)** | Performance & Engajamento | Adicionar um Service Worker para *caching* de recursos (*offline first*) e permitir a instalação do blog como um aplicativo. |
| **Testes Unitários** | Qualidade do Código | Implementar testes para serviços e componentes *Dumb*, garantindo a estabilidade e facilitando o *refactoring*. |

---

### **⚙️ Como Rodar o Projeto (Localmente):**

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/miriaamaral/angular-services.git](https://github.com/miriaamaral/angular-services.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    * A aplicação estará disponível em `http://localhost:4200/`.

---

### **Conecte-se Comigo! 👋**

Gostou do projeto, da arquitetura ou quer trocar uma ideia sobre Angular e Frontend? Ficarei super feliz!

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miriaamaralcs) [![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/miriaamaral) [![Discord Badge](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/miriaamaralcustodiosantos)

* **Email:** [miriaamaralcs@gmail.com](mailto:miriaamaralcs@gmail.com)
* **Plataforma de Estudos (DIO):** [https://www.dio.me/sign-up?ref=6F1F401485F9459BA6AC879FEA95D1B5](https://www.dio.me/sign-up?ref=6F1F401485F9459BA6AC879FEA95D1B5)

Vamos juntos construir o futuro da tecnologia! ✨
