import type { Role } from '@/packages'

import { api } from './api-client'

type GetInvitesResponse = {
  invites: {
    id: string
    role: Role
    email: string
    createdAt: string
    author: {
      id: string
      name: string | null
    } | null
  }[]
}

export async function getInvites(org: string) {
  const result = await api
    .get(`organizations/${org}/invites`)
    .json<GetInvitesResponse>()

  return result
}
