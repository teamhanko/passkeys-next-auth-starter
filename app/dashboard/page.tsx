import LogoutButton from '@/components/logout-button'
import RegisterNewPasskey from '@/components/register-new-passkey-button'
import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Home() {
    const session = await getServerSession(authOptions)
    return (
        <main>
            <div className="p-10">
                <h1>public route</h1>
                {
                    session ? (
                        <div>
                            <p>You are logged in</p>
                            <div className="p-10 rounded-lg border border-muted">
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <h2 className="text-xl font-medium">Register a passkey</h2>
                                        <p className="text-sm text-secondary-foreground mt-3">
                                            Never use a password or oauth again. Register a passkey to
                                            make logging in easy.
                                        </p>
                                    </div>
                                    <RegisterNewPasskey />
                                </div>
                            </div>
                            <LogoutButton />
                        </div>
                    ) : (
                        <div>
                            <p>Please login in</p>
                            <Button asChild>
                                <Link href="/auth">
                                    Login
                                </Link>
                            </Button>
                        </div>
                    )
                }
            </div>
        </main>
    )
}
