import { api } from './api-client'

type SignInWithGithubRequest = {
  code: string
}

type SignInWithGithubResponse = {
  token: string
}

export async function signInWithGithub({
  code,
}: SignInWithGithubRequest): Promise<SignInWithGithubResponse> {
  const result = await api
    .post('sessions/github', {
      json: {
        code,
      },
    })
    .json<SignInWithGithubResponse>()

  return result
}
