This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Detalhes do Projeto
- Projeto criado por "Code in Flow no Youtube"

## O que tem no projeto
- Zod - não foi utilizado para variavies de ambiente. Utilizado como validalidador de variavies.
- Validacões com zod com o hook form. com uso de resolve para aplicar no formulário com compoments shadcn.
- Criação de components com shadcn (generate).
- Importação dinamica para draft wysiwyg, para criar o editor de texto markdown e configuração
- Utilização de icones do lucide.
- Utlização de cache para lista de slugs
- Utilização do markdown para transformar as informação do richtexteditor do banco de dados.
- Utilização do rook useMemo para as listas de cidades
- Utização do clerk para autenticação do adminstrador

## Coisas criadas
- Criação de formulário para criação de anuncio de trabalho.
- Criação de pesquisa para a lista de trabalhos.
- Criação de proprios components com shadsn, usando tailwind merge, clsx e forwardRef.
- Criação de uma simples páginação usando prisma, para pesquisa e páginas
- Criação de uma admin dashboard para aprovar ou remove um trabalho com prisma

## Sobre
- Algunas páginas padrões do next: not found, error
- Server actions: "use client", "use server" (async)
- Middleware
