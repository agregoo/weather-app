# 🌤️ Weather App

<div align="center">

![Expo](https://img.shields.io/badge/Expo-54-blue?logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![NativeWind](https://img.shields.io/badge/NativeWind-4-38BDF8)
![License](https://img.shields.io/badge/License-MIT-green)

Aplicação mobile desenvolvida em **React Native + Expo** para consultar o clima atual e a previsão dos próximos dias utilizando a API do **OpenWeather**.

</div>

---

# 📱 Demonstração

> Em breve serão adicionadas capturas de tela e GIF da aplicação.

| Home | Detalhes | Previsão |
|------|----------|----------|
| 📷 | 📷 | 📷 |

---

# 📖 Sobre o projeto

O Weather App é um projeto criado com fins educativos durante meus estudos de **React Native**.

O principal objetivo foi aprender como construir uma aplicação mobile completa, desde a configuração do ambiente até o consumo de APIs REST.

Durante o desenvolvimento foram abordados conceitos como:

- Navegação entre telas
- Componentização
- Consumo de APIs
- Manipulação de estados
- Tratamento de erros
- Interface responsiva
- Organização de pastas
- Boas práticas em React Native

---

# ✨ Funcionalidades

- 🔍 Buscar clima por cidade
- 🌡️ Temperatura atual
- ☁️ Descrição do clima
- 🌎 Nome da cidade e país
- 💨 Velocidade do vento
- 💧 Humidade
- 🌡️ Sensação térmica
- 📈 Pressão atmosférica
- 📅 Previsão para os próximos dias
- 🔄 Atualização da previsão
- ⏳ Indicador de carregamento
- ❌ Tratamento de erros
- 🎨 Interface moderna utilizando NativeWind

---

# 🛠️ Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- NativeWind
- React Navigation
- React Native Safe Area Context
- Expo Vector Icons
- OpenWeather API
- Fetch API

---

# 📂 Estrutura do projeto

```
src
│
├── navigation
│   └── AppNavigator.tsx
│
├── screens
│   ├── HomeScreen.tsx
│   ├── DetailsScreen.tsx
│   └── ForecastScreen.tsx
│
├── services
│   └── weatherApi.ts
│
├── assets
│
└── global.css
```

---

# 🚀 Como executar o projeto

## Clone o repositório

```bash
git clone https://github.com/agregoo/weather-app.git
```

Entre na pasta

```bash
cd weather-app
```

Instale as dependências

```bash
npm install
```

Execute o projeto

```bash
npx expo start
```

---

# 🔑 Configuração da API

Crie um arquivo

```
.env
```

ou

```
.env.local
```

Adicione sua chave:

```env
EXPO_PUBLIC_API_KEY=SUA_CHAVE
```

A chave pode ser obtida gratuitamente em:

https://openweathermap.org/api

---

# 📡 API utilizada

OpenWeather API

Endpoints utilizados

### Clima atual

```
/weather
```

### Previsão

```
/forecast
```

Documentação

https://openweathermap.org/api

---

# 📚 O que foi aprendido

Durante o desenvolvimento foram estudados os seguintes conceitos:

## React Native

- Componentes
- Props
- Estados
- Eventos
- Navegação
- Hooks

## Hooks

- useState
- useEffect

## Consumo de APIs

- async
- await
- fetch
- try
- catch
- finally

## Interface

- NativeWind
- Flexbox
- SafeAreaView
- FlatList
- ActivityIndicator

## Navegação

- React Navigation
- Stack Navigation
- Passagem de parâmetros

## Organização

- Estrutura de pastas
- Componentização
- Separação entre telas e serviços

---

# 📸 Telas

## Home

- Pesquisa da cidade
- Temperatura atual
- Clima atual

---

## Details

- Sensação térmica
- Humidade
- Pressão
- Vento

---

## Forecast

- Previsão para os próximos dias
- Ícones do clima
- Temperaturas

---

# 💡 Melhorias futuras

- 📍 Localização atual via GPS
- 🌙 Dark Mode
- ⭐ Cidades favoritas
- 🔔 Alertas meteorológicos
- 🌎 Pesquisa por coordenadas
- 🗺️ Mapa da cidade
- 📈 Gráficos de temperatura
- 🌅 Nascer e pôr do sol
- 🌬️ Índice UV
- 🌧️ Probabilidade de chuva
- 🎭 Animações com Reanimated

---

# 🤝 Contribuindo

Contribuições são sempre bem-vindas.

Caso encontre algum problema ou tenha alguma sugestão:

- Abra uma Issue
- Faça um Fork
- Envie um Pull Request

---

# 👨‍💻 Autor

**Adilson Grego**

Desenvolvedor Front-end

React • React Native • Next.js • TypeScript

GitHub

https://github.com/agregoo

LinkedIn

https://linkedin.com/in/adilson-grego

---

# ⭐ Apoie este projeto

Se este projeto foi útil para você, considere deixar uma ⭐ no repositório.

Isso ajuda outras pessoas a encontrarem o projeto e incentiva a continuidade do desenvolvimento.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

```
MIT License

Copyright (c) 2026 Adilson Grego

Permission is hereby granted...
```

---

<div align="center">

Desenvolvido com ❤️ utilizando React Native + Expo

</div>
