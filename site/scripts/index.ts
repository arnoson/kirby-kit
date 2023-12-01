import '~/styles/index.scss'
import { mountComponents } from '@very-simple/components'

import.meta.glob('../(templates|snippets|layouts)/**/*.(ts|scss)', {
  eager: true,
})

mountComponents()
