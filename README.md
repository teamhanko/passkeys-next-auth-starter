# Hanko Passkey Starter for Next-Auth

This repo shows how you can add passkey login with Hanko Passkey API to your Next.js app that uses Next-Auth for authentication.

## Technologies used

- Next.js
- [Next-Auth](https://authjs.dev/) 
- [Resend](https://resend.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)
- [Prisma](https://www.prisma.io/)
- [Hanko Passkey API](https://www.hanko.io/features/hanko-passkey-api)

## Clone the repo

```bash
git clone https://github.com/teamhanko/passkeys-next-auth-starter.git
```

## Add the environment variables

Add the following environment variables to `.env.local` file.

```sh
NEXTAUTH_SECRET=random-string
NEXTAUTH_URL=http://localhost:3000

GITHUB_ID=
GITHUB_SECRET_ID=

# for email service
EMAIL_SERVER_USER=resend
EMAIL_SERVER_PASSWORD=your-resend-api-key
EMAIL_SERVER_HOST=smtp.resend.com
EMAIL_SERVER_PORT=465
EMAIL_FROM=onboarding@resend.dev

DATABASE_URL=your-db-url

PASSKEYS_API_KEY=your-hanko-passkey-api-key
NEXT_PUBLIC_PASSKEYS_TENANT_ID=your-hanko-passkey-tenant-id
```

## Install dependencies

```bash
pnpm install
```

## Run the project

```bash
pnpm run dev
```
