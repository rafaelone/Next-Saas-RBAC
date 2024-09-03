import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

import { acceptInvite } from '@/http/accept-invite'
import { signInWithGithub } from '@/http/sign-in-with-github'

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams

  const code = search.get('code')

  if (!code) {
    return NextResponse.json(
      {
        message: 'Github Oauth code was not found',
      },
      { status: 400 },
    )
  }

  const { token } = await signInWithGithub({ code })

  cookies().set('token', token, {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  })

  const inviteId = cookies().get('inviteId')?.value

  if (inviteId) {
    try {
      await acceptInvite(inviteId)
      cookies().delete('inviteId')
    } catch (e) {}
  }

  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/'
  redirectUrl.search = ''

  return NextResponse.redirect(redirectUrl)
}
