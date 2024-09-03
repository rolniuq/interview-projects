## Remitano API

### Prerequisites:

- [NodeJs](https://nodejs.org)

### How to run:

```bash
# with npm
npm install
npm run start

# with yarn
yarn
yarn start

# with pnpm
pnpm install
pnpm run start
```

### Folder structure:

```sh
./
│
└── src/
    ├── constants/
    ├── dto/
    ├── entities/
    ├── guards/
    ├── modules/
    │   ├── auth/
    │   ├── users/
    │   ├── videos/
    │   ├── votes/
    │   └── index.ts
    ├── app.module.spec.ts
    ├── app.module.ts
    ├── main.ts
    └── test/
│
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── alias.tsconfig.json
├── nest-cli.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.build.json
└── tsconfig.json

````
