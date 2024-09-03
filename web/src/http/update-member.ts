import type { Role } from '@/packages'

import { api } from './api-client'

type UpdatememberRequest = {
  org: string
  memberId: string
  role: Role
}

export async function updateMember({
  org,
  memberId,
  role,
}: UpdatememberRequest) {
  await api.put(`organizations/${org}/members/${memberId}`, {
    json: { role },
  })
}
