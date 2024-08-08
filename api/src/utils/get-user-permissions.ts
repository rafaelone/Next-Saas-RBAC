import { defineAbilityFor } from '@/packages/auth/src'
import { userSchema } from '@/packages/auth/src/modules/user'
import type { Role } from '@/packages/auth/src/roles'

export function getUserPermissions(userId: string, role: Role) {
  const authUser = userSchema.parse({
    id: userId,
    role,
  })

  const ability = defineAbilityFor(authUser)

  return ability
}
