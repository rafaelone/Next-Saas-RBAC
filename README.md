Saas = Software as a Service

Single Tenant vs Multi Tenant

Single = um software é utilizado para UMA empresa (delphi/java) PDV - cópias ZIP - TeamViewer - instalação manual

Infraestrutura única para cliente

/-------------------------------------------------/

multi = um software que é usado por mais uma empresa com a mesma infraestrutura

multi tenant NAO QUER DIZER multi subdominios

empresa1.app.com
empresa2.app.com

multi tenant NÃO QUER DIZER um banco por empresa

A GRANDE MAIORIA dos Saas que são Multi Tenant não usam um banco por empresa

1. Público(governo)
2. LGDP / Contrato individual (Itaú)

Estategia de subdominios: Páginas publicas

/-------------------------------------------------/

Autorização

RBAC - Role Based Authorization Control
Role: admin, billing, developer, member

ABAC - Attribute Based Authorization Control
admin pode editar um projeto
membro pode editar o título de um projeto

/-------------------------------------------------/

Biblioteca para autorização

CASL - Isomorphic Authorization Javascript library

user action -> descreve a permissão (CRUD ou outros verbos)

subject - entidades da aplicação

fields - campos das entidades aos queis eu quero poder add um tipo de permissão condicional

conditions - usuario só pode editar um projeto se foi ele q criou o projeto,

# Next.js Saas + RBAC

this project contains all the necessary boilerplate to setup a multi-tenant Saas with Next.js including authentication and RBAC authorization

# Features

### Authentication

- [x] It should be able to authenticate using e-mail & password;
- [x] It should be able to authentica using Github account;
- [x] It should be able to recover password using e-mail;
- [x] It should be able to create an account (e-mail, name and password);

### Organization

- [x] It should be able to create a new organization;
- [x] It should be able to get organization to which the user belongs;
- [x] It should be able to update an organization;
- [x] It should be able to shutdown an organization;
- [x] It should be able to transfer organization ownership;

### Invites

- [] It should be able to invite a new member (e-mail, role);
- [] It should be able to accept an invite;
- [] It should be able to revoke a pending invite;

### Members

- [x] It should be able to get organization members;
- [] It should be able to update a member role;

### Projects

- [] It should be able to get projects within a organization;
- [x] It should de able to create a new project (name, url, description);
- [] It should be able to update a project (name, url, description);
- [] It should be able to delete a project;

### Belling

- [] It should be able to get a billing for organization ($20 per project / $10 per member excluding billing role);

### Roles

- Aministrator
- Member
- Billing

### Permissions table

|                        | Administrator | Member | Billing | Anonumous |
| ---------------------- | ------------- | ------ | ------- | --------- |
| Update organization    | ✅            | ❌     | ❌      | ❌        |
| Delete organization    | ✅            | ❌     | ❌      | ❌        |
| Invite a member        | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite       | ✅            | ❌     | ❌      | ❌        |
| List member            | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership     | ⚠            | ❌     | ❌      | ❌        |
| Update member role     | ✅            | ❌     | ❌      | ❌        |
| Delete member          | ✅            | ⚠     | ❌      | ❌        |
| List projects          | ✅            | ✅     | ✅      | ❌        |
| Create a new Project   | ✅            | ✅     | ❌      | ❌        |
| Update a project       | ✅            | ⚠     | ❌      | ❌        |
| Delete a project       | ✅            | ⚠     | ❌      | ❌        |
| Get billing details    | ✅            | ❌     | ✅      | ❌        |
| Export billing details | ✅            | ❌     | ✅      | ❌        |

> ✅ = allowed
> ❌ = not allowed
> ⚠ = allowed w/ conditions

commands prisma

npx prisma init
npx prisma migrate dev
npx prisma studio
