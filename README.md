# Color Filler App

## Visão Geral
O **Color Filler App** é um projeto em React.js que permite aos usuários controlar interativamente a cor de fundo de uma caixa ajustando os valores RGB. Inclui recursos para incrementar valores de cor periodicamente, personalizar intervalos e alternar entre formatos de cor.

---

## Funcionalidades

- **Seletor de Cor**: Escolha uma cor inicial usando um seletor de cores.
- **Controle de Incremento RGB**: Ajuste os valores de incremento para os componentes vermelho, verde e azul.
- **Controle de Intervalo**: Personalize o tempo de intervalo para atualizações periódicas da cor.
- **Botão Iniciar/Parar**: Controle a animação com um botão de alternância.
- **Seleção de Formato de Cor**: Alterne entre os formatos RGB e HSL para exibição.
- **Validação de Entrada**: Garante que apenas valores hexadecimais válidos sejam aceitos.

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repo/color-filler-app.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd color-filler-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

---

## Como Usar

1. Abra o aplicativo no navegador em `http://localhost:3000`.
2. Use o **Seletor de Cor** para escolher uma cor inicial.
3. Ajuste os valores de incremento para os canais vermelho, verde e azul.
4. Defina o tempo de intervalo (em milissegundos) para as atualizações de cor.
5. Escolha o formato de cor desejado (RGB ou HSL).
6. Clique no botão **Iniciar** para começar a animação.
7. Use o botão **Parar** para pausar a animação e fazer ajustes.

---

## Estrutura do Projeto

```
color-filler-app/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

---

## Detalhes Técnicos

- **Framework**: React.js
- **Gerenciamento de Estado**: React hooks (`useState`, `useEffect`)
- **Estilização**: CSS customizado para simplicidade
- **Validação**: Garante apenas valores hexadecimais válidos para cores

---

## Melhorias Futuras

1. Adicionar suporte para formatos de cor adicionais (ex.: CMYK).
2. Introduzir predefinições para cores comuns.
3. Implementar design responsivo para dispositivos móveis.

---

## Autor

Felipe Rocha Germano
