import { mountComponents } from '@very-simple/components'
import { lazyLoad } from 'unlazy'
import '~/styles/index.css'

import.meta.glob('../(templates|snippets|layouts)/**/*.(ts|scss)', {
  eager: true,
})

mountComponents()
lazyLoad()
