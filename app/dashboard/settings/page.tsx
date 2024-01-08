import RegisterNewPasskey from '@/components/register-new-passkey-button'

const Settings = () => {
    return (
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
    )
}

export default Settings