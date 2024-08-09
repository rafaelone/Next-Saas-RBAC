'use server'

import { redirect } from 'next/navigation'

import { env } from '@/packages/envs'

export async function signInWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  githubSignInURL.searchParams.append('client_id', env.GITHUB_OUATH_CLIENT_ID)
  githubSignInURL.searchParams.append(
    'redirect_uri',
    env.GITHUB_OUATH_CLIENT_REDIRECT_URI,
  )
  githubSignInURL.searchParams.append('scope', 'user')

  redirect(githubSignInURL.toString())
}
