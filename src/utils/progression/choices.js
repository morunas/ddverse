import languages from '@/utils/core/languages'

const LANGUAGE = 'language';

const types = {
  LIST: 'list',
  NUMBER: 'number'
}

const choices = {
  'language': {
    title: 'Choose a Language',
    type: types.LIST
    options: languages
  }
}

export default {
  LANGUAGE
}
