# Arquitetura Digital — Exploração Visual em Espaços Virtuais

Este é um projeto autoral que investiga a relação entre arquitetura e tecnologia através da visualização 3D de um espaço imersivo. Inspirado pela ideia de que o espaço digital também é arquitetura, o projeto propõe uma experiência onde o usuário adentra um ambiente tridimensional e interativo criado com tecnologias modernas da web.

## 📊 Objetivos

- Unir conhecimentos de **arquitetura tradicional** com **design digital interativo**.
- Criar uma experiência sensorial usando **Three.js**, **React Three Fiber**, e **GSAP**.
- Refletir sobre o papel da arquitetura no espaço virtual: "**O espaço digital também é arquitetura?**"

---

## 📂 Estrutura do Projeto

```bash
src/
  app/
    page.tsx                # Redireciona para /landing
    landing/page.tsx        # Tela inicial com transição GSAP
    experience/page.tsx     # Página da experiência 3D
  three/
    Experience.tsx          # Canvas com modelo e controle da cena
    AtticModel.tsx          # Modelo GLB do sótão importado
  public/
    models/attic.glb        # Modelo 3D utilizado
    sounds/forest.mp3       # Áudio ambiente (sons de floresta)
```

---

## 🔧 Tecnologias Utilizadas

- **Next.js (App Router)**
- **React Three Fiber** & **Drei**
- **Three.js**
- **GSAP** (animações e transições)
- **TailwindCSS** (estilização)
- **GLB/GLTF** Loader

---

## 🚀 Como rodar localmente

1. Instale as dependências:
```bash
npm install
```

2. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse no navegador:
```
http://localhost:3000
```
Você será redirecionado para `/landing`, onde a experiência se inicia.

---

## 🎨 Funcionalidades

### Landing Page
- Animação de entrada com **GSAP**
- Frase provocativa: _"O espaço digital também é arquitetura?"_
- Botão para iniciar a experiência

### Experiência 3D
- Câmera fixa que gira sobre si mesma com mouse drag
- Ambiente 3D: sótão importado de arquivo `.glb`
- Som ambiente com **toggle de áudio**
- Controle por `OrbitControls` com foco ajustado para a direção inicial definida pelo usuário

---

## 📓 Notas de Design

- A transição entre interfaces é feita com **GSAP** para fluidez.
- Todo o estilo é feito com utilitários Tailwind, garantindo responsividade.
- A estrutura de pastas está organizada para escalabilidade (hooks, sections, components).

---

## 🎭 Inspiração

> "Mesmo migrando para a tecnologia, percebo que meu olhar para o espaço urbano ainda me acompanha [...] criar um site, um produto ou uma experiência interativa é, de certa forma, criar um novo espaço."

Este projeto é uma extensão da minha formação como arquiteto, traduzida para o mundo digital.

---

## 🌐 Deploy

Em breve será disponibilizado via **Vercel**.

---

**Obrigado por explorar este espaço digital.**

