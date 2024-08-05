import { api } from './api-client'

type GetProfile = {
  user: {
    id: string
    name: string | null
    email: string
    avatarUrl: string | null
  }
}

export async function getProfile(): Promise<GetProfile> {
  const result = await api.get('profile').json<GetProfile>()

  return result
}
