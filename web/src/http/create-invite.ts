import { api } from './api-client'

type CreateInviteRequest = {
  email: string
  role: string
  org: string
}

type CreateInviteResponse = void

export async function createInvite({
  org,
  role,
  email,
}: CreateInviteRequest): Promise<CreateInviteResponse> {
  await api.post(`organizations/${org}/invites`, {
    json: {
      email,
      role,
    },
  })
}
