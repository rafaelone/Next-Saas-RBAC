import type { Role } from '@/packages'

import { api } from './api-client'

type GetInviteResponse = {
  invite: {
    id: string
    email: string
    role: Role
    createdAt: string
    organization: {
      name: string
    }
    author: {
      id: string
      email: string
      avatarUrl: string | null
      name: string
    } | null
  }
}

export async function getInvite(inviteId: string) {
  const result = await api.get(`invites/${inviteId}`).json<GetInviteResponse>()

  return result
}
