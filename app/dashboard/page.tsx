import LogoutButton from '@/components/logout-button'
import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Home() {
    const session = await getServerSession(authOptions)
    const user = session?.user
    console.log(session?.user)
    return (
        <div>
           Dashboard
        </div>
    )
}
