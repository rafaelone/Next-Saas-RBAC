import { api } from './api-client'

type GetOrganizationsResponse = {
  organizations: {
    id: string
    name: string | null
    slug: string
    avatarUrl: string | null
  }[]
}

export async function getOrganizations() {
  const result = await api.get('organizations').json<GetOrganizationsResponse>()

  return result
}
