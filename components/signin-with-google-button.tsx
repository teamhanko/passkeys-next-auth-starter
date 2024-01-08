"use client"

import { Github } from "lucide-react"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

const SignInWithGoogle = () => {
    return (
        <Button onClick={() => signIn('google', {
            callbackUrl: `${window.location.origin}/dashboard`
        })} className="mt-4" variant="secondary"> Google </Button>
    )
}

export default SignInWithGoogle