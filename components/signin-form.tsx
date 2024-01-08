"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { signIn } from "next-auth/react"
import { toast } from "sonner"


const SignInForm = () => {
    const [email, setEmail] = useState<null | string>(null)

    async function signInWithEmail() {
        const signInResult = await signIn('email', {
            email,
            callbackUrl: `${window.location.origin}/dashboard/settings`,
            redirect: false,
        })

        if (!signInResult?.ok) {
            return toast.error("Well it din't work, please try again")
        }

        return toast.success("Check your email for the magic link")
    }

    return (
        <form action={signInWithEmail}>
            <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="name@example.com" />
            </div>
            <Button type="submit" className="mt-4 w-full">Sign in with Email</Button>
        </form>
    )
}

export default SignInForm
