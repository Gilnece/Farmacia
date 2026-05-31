# Farmácia Essencial

Documentação do projeto de página institucional responsiva para uma farmácia, desenvolvida com HTML, CSS e JavaScript puro.

## Visão geral

O projeto apresenta uma landing page para a Farmácia Essencial com foco em clareza, confiança e facilidade de contato. A interface foi organizada para reduzir esforço do usuário, destacar ações importantes e funcionar bem em celulares, tablets e desktops.

## Imagens do projeto

### Prévia desktop

<img src="images/preview-desktop.png" alt="Prévia desktop da página Farmácia Essencial" width="520">

### Prévia mobile

<img src="images/preview-mobile-premium.png" alt="Prévia mobile da página Farmácia Essencial" width="320">

### Prévia tablet 11 polegadas

<img src="images/preview-tablet-11.png" alt="Prévia em tablet de 11 polegadas da página Farmácia Essencial" width="520">

### Prévia tablet 13.5 polegadas

<img src="images/preview-tablet-13.png" alt="Prévia em tablet de 13.5 polegadas da página Farmácia Essencial" width="520">

### Prévia tablet 15 polegadas

<img src="images/preview-tablet-15.png" alt="Prévia em tablet de 15 polegadas da página Farmácia Essencial" width="520">

## Estrutura do projeto

```text
Famarcia/
+-- assets/
|   +-- farmacia-hero.jpg
+-- css/
|   +-- style.css
+-- docs/
|   +-- Readme.md
|   +-- images/
|       +-- preview-desktop.png
|       +-- preview-mobile-premium.png
|       +-- preview-tablet-11.png
|       +-- preview-tablet-13.png
|       +-- preview-tablet-15.png
+-- js/
|   +-- script.js
+-- index.html
```

## Como executar

Não há dependências externas nem processo de build.

1. Abra o arquivo `index.html` no navegador.
2. Navegue pelas seções usando o menu superior.
3. Teste o formulário preenchendo ou deixando campos vazios para ver as mensagens de validação.

## Principais seções

- `Início`: apresentação da farmácia, chamada principal e resumo do atendimento.
- `Produtos`: categorias de produtos mais procuradas.
- `Serviços`: conferência de receita, separação de pedido e entrega local.
- `Sobre`: missão, visão e valores.
- `Contato`: informações de contato e formulário com validação.

## Melhorias de UX/UI aplicadas

As decisões de interface foram guiadas pelas heurísticas de Nielsen:

- Visibilidade do status do sistema: menu mobile indica abertura e fechamento; formulário mostra feedback após envio.
- Correspondência com o mundo real: textos usam linguagem simples e termos comuns ao contexto farmacêutico.
- Controle e liberdade do usuário: navegação por âncoras, link para voltar ao início e tecla `Esc` para fechar o menu.
- Consistência e padrões: botões, cards, links e campos seguem o mesmo estilo visual.
- Prevenção de erros: campos obrigatórios e validação de e-mail antes do envio.
- Reconhecimento em vez de memorização: categorias e serviços ficam visíveis em blocos fáceis de escanear.
- Acessibilidade: link para pular conteúdo, foco visível, `aria-label`, `aria-expanded`, `aria-invalid` e mensagens próximas aos campos.
- Design minimalista: conteúdo direto, espaçamentos consistentes e hierarquia visual clara.
- Ajuda na recuperação de erros: mensagens aparecem junto ao campo que precisa ser corrigido.

## Responsividade

O layout foi preparado para diferentes tamanhos de tela:

- Desktop: grid com múltiplas colunas para aproveitar melhor o espaço.
- Tablet: seções reorganizadas em colunas reduzidas.
- Mobile: menu recolhível, botões em largura total e cards empilhados.

Os principais breakpoints estão definidos em `css/style.css`:

- `980px`
- `760px`
- `520px`

## Arquivos principais

### `index.html`

Contém a estrutura semântica da página, incluindo cabeçalho, seções principais, formulário e rodapé.

### `css/style.css`

Define identidade visual, responsividade, estados de foco, cards, botões, menu mobile e formulário.

### `js/script.js`

Controla:

- abertura e fechamento do menu mobile;
- rolagem suave para seções;
- validação do formulário;
- mensagens de erro e sucesso;
- fechamento do menu com `Esc` e ao redimensionar a tela.

## Créditos de imagem

A imagem principal foi obtida no Unsplash:

- Foto de David Trinks: https://unsplash.com/photos/mLaIFEtUZFs

## Possíveis próximos passos

- Integrar o formulário com WhatsApp, e-mail ou backend.
- Adicionar página/listagem real de produtos.
- Incluir mapa de localização.
- Criar testes manuais documentados para responsividade e acessibilidade.
