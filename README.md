# Portfólio de Murilo Corsulini

Portfólio pessoal estático desenvolvido com HTML, CSS e JavaScript puro.

O projeto foi estruturado para ser simples de manter, fácil de publicar e rápido de personalizar. Todo o conteúdo principal do site fica centralizado em um único arquivo JavaScript, enquanto o visual e o comportamento ficam separados em arquivos próprios.

## Objetivo do projeto

Este site foi criado para apresentar:

- Informações pessoais e trajetória acadêmica
- Projetos desenvolvidos
- Certificados
- Palestras e experiências
- Currículo
- Contatos profissionais

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts

## Estrutura do projeto

```text
.
|-- index.html
|-- projetos.html
|-- sobre.html
|-- certificados.html
|-- palestras.html
|-- curriculo.html
|-- content.js
|-- script.js
|-- styles.css
|-- COPYRIGHT.txt
|-- README.md
```

## Função de cada arquivo

### Páginas HTML

- `index.html`: página inicial do portfólio
- `projetos.html`: página de projetos
- `sobre.html`: página sobre mim
- `certificados.html`: página de certificados
- `palestras.html`: página de palestras
- `curriculo.html`: página de currículo

### Arquivos principais

- `content.js`: contém todos os textos, listas, dados pessoais, certificados, palestras e links
- `script.js`: monta o conteúdo das páginas, gera navegação, aplica footer de copyright e interações
- `styles.css`: controla todo o visual do site, incluindo tema escuro, tipografia, layout responsivo e animações

## Como editar o site

### Alterar seus dados pessoais

Abra `content.js` e edite o objeto `window.portfolioData`.

Você pode atualizar:

- Nome
- Ano escolar
- Tecnologias estudadas
- Objetivo profissional
- Projeto em destaque
- Certificados
- Palestras
- Contatos

### Adicionar seus contatos reais

No arquivo `content.js`, edite a seção:

```js
contacts: {
  emailLabel: "Adicionar seu e-mail",
  emailHref: "",
  phoneLabel: "Adicionar seu telefone",
  phoneHref: "",
  whatsappLabel: "Adicionar seu WhatsApp",
  whatsappHref: "",
  githubLabel: "Adicionar seu GitHub",
  githubHref: "",
  linkedinLabel: "Adicionar seu LinkedIn",
  linkedinHref: "",
  cvLabel: "Adicionar link do currículo em PDF",
  cvHref: ""
}
```

Exemplo:

```js
emailLabel: "murilo@email.com",
emailHref: "mailto:murilo@email.com",
githubLabel: "github.com/murilocorsulini",
githubHref: "https://github.com/murilocorsulini"
```

### Alterar o visual do site

Abra `styles.css`.

Os principais ajustes ficam nas variáveis CSS do topo do arquivo:

- cores de fundo
- cores de destaque
- cor dos textos
- sombras
- raios de borda

### Alterar textos das seções

Tudo pode ser ajustado em `content.js`, sem necessidade de mexer no HTML das páginas.

## Recursos atuais do site

- Tema escuro em todas as páginas
- Navegação entre páginas
- Layout responsivo para desktop e mobile
- Tipografia moderna
- Efeito visual de destaque no fundo
- Cards para projetos, certificados e experiências
- Footer discreto com copyright
- Metadados básicos no `head`
- Conteúdo centralizado em um único arquivo

## Metadados já adicionados

Todas as páginas possuem:

- `author`
- `copyright`
- `theme-color`
- `color-scheme`
- `description`
- `viewport`

## Como abrir o site localmente

Você pode:

1. Abrir `index.html` diretamente no navegador
2. Usar uma extensão como Live Server no VS Code
3. Publicar em um host estático

## Como publicar

O projeto pode ser publicado facilmente em:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### Publicação no GitHub Pages

1. Envie os arquivos para um repositório no GitHub
2. Vá em `Settings`
3. Abra `Pages`
4. Escolha a branch principal
5. Defina a pasta raiz como `/root`
6. Salve e aguarde a URL ser gerada

## Boas práticas para manter o projeto

- Centralize alterações de conteúdo em `content.js`
- Faça ajustes visuais apenas em `styles.css`
- Evite duplicar texto nas páginas HTML
- Mantenha links de contato atualizados
- Teste navegação e leitura no celular após alterações grandes

## Direitos autorais

Este projeto possui copyright reservado para:

**Murilo Corsulini**

Todos os direitos reservados.

## Melhorias futuras recomendadas

- Adicionar favicon personalizado
- Inserir foto de perfil
- Adicionar screenshots reais dos projetos
- Incluir currículo em PDF
- Criar seção de contato com formulário
- Adicionar SEO avançado com Open Graph
- Criar página 404 personalizada

## Status do projeto

Projeto funcional e pronto para personalização/publicação.
