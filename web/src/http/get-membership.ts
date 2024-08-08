import type { Role } from '@/utils/roles'

import { api } from './api-client'

type GetMembershipResponse = {
  membership: {
    id: string
    role: Role
    userId: string
    organizationId: string
  }
}

export async function getMembership(
  org: string,
): Promise<GetMembershipResponse> {
  const result = await api
    .get(`organization/${org}/membership`)
    .json<GetMembershipResponse>()

  return result
}
