import { defineAbilityFor } from '@saas/auth'
import { userSchema } from '@saas/auth/src/modules/user'
import type { Role } from '@saas/auth/src/roles'

export function getUserPermissions(userId: string, role: Role) {
  const authUser = userSchema.parse({
    id: userId,
    role,
  })

  const ability = defineAbilityFor(authUser)

  return ability
}
