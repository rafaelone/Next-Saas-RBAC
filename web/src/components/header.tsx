import Image from 'next/image'

import nextIcon from '@/assets/nextIcon.svg'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={nextIcon} className="size-6 dark:invert" alt="NextJs" />
      </div>
      <div className="flex items-center gap-4"></div>
    </div>
  )
}
