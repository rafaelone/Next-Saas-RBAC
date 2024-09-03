import { api } from './api-client'

type RemoveInviteRequest = {
  org: string
  inviteId: string
}

export async function revokeInvite({ org, inviteId }: RemoveInviteRequest) {
  await api.delete(`organizations/${org}/invites/${inviteId}`, {
    next: {
      tags: [`${org}/invites`],
    },
  })
}
