"use client"

import { Button } from "./ui/button"
import { signInWithPasskey } from "@teamhanko/passkeys-next-auth-provider/client";

const SignInWithPasskey = () => {
    return (
        <Button onClick={() => signInWithPasskey({ tenantId: process.env.NEXT_PUBLIC_PASSKEYS_TENANT_ID! })} className="mt-4" variant="secondary">Continue with Passkey </Button>
    )
}

export default SignInWithPasskey