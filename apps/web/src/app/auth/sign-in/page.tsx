import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignInPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input name="password" type="password" id="password" />

        <Link
          href="/auth/forgot-password"
          prefetch
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>
      <Button className="w-full" type="submit">
        Sign in with e-mail
      </Button>
      <Separator />
      <Button className="w-full" variant="outline" type="submit">
        <Image src={githubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign in with GitHub
      </Button>
    </form>
  )
}
