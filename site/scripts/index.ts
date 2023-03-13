import 'modern-css-reset'
import '../styles/index.scss'
import Loadeer from 'loadeer'
import { mountComponents } from '@very-simple/components'

import.meta.glob('../(templates|snippets|layouts)/**/*.(ts|scss)', {
	eager: true,
})

mountComponents()
new Loadeer().observe()
