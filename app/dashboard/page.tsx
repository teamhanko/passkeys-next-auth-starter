import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Home() {
    const session = await getServerSession(authOptions)
    const user = session?.user
    console.log(session?.user)
    return (
        <div className='mt-20 text-2xl font-bold m-20'>
           Welcome {user?.name}! Move to {<Link href="/dashboard/settings" className='text-blue-500 underline'>settings</Link>} to register a new passkey.
        </div>
    )
}
