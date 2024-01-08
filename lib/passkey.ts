"use server"

import { getServerSession } from "next-auth";
import { tenant } from "@teamhanko/passkeys-next-auth-provider";
import prisma from "./db";
import { authOptions } from "./auth";

const passkeyApi = tenant({
    apiKey: process.env.PASSKEYS_API_KEY!,
    tenantId: process.env.NEXT_PUBLIC_PASSKEYS_TENANT_ID!,
});

export async function startServerPasskeyRegistration() {
    const session = await getServerSession(authOptions);
    const sessionUser = session?.user;

    const user = await prisma.user.findUnique({
        where: { email: sessionUser?.email as string },
        select: { id: true, name: true },
    });

    const createOptions = await passkeyApi.registration.initialize({
        userId: user!.id,
        username: user!.name || "",
    });

    return createOptions;
}

export async function finishServerPasskeyRegistration(credential: any) {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Not logged in");

    await passkeyApi.registration.finalize(credential);
}
