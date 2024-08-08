import { api } from './api-client'

type SignInWithPasswordRequest = {
  email: string
  password: string
}

type SignInWithPasswordResponse = {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest): Promise<SignInWithPasswordResponse> {
  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<SignInWithPasswordResponse>()

  return result
}
