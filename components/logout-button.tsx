"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

export const LogoutButton = () => {
    return (
        <Button onClick={() => signOut(
            {
                callbackUrl: `${window.location.origin}/`
            }
        )} className="mt-4">Logout</Button>
    )
}

export default LogoutButton


