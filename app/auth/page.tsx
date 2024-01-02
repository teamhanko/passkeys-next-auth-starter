import SignInForm from "@/components/signin-form";
import SignInWithGithub from "@/components/signin-with-github-button";
import SignInWithPasskey from "@/components/signin-with-passkey-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function AuthPage() {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect('/')
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Please sign in</CardTitle>
                    <CardDescription>To access the private page you have to be authenticated</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <SignInForm />
                        <SignInWithGithub />
                        <SignInWithPasskey />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
