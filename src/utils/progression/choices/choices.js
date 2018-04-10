import languages from '@/utils/core/languages'
import * as types from './types'
import * as modes from './modes'

export {
  [types.LANGUAGE]: {
    title: 'Choose a Language',
    mode: modes.SELECT,
    data: languages
  }
}
