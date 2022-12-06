import { useContext } from 'react'
import LocaleContext from '../context/LocaleContext'
import content from '../utils/content'

function useLanguage(page) {
  const { locale } = useContext(LocaleContext)

  return content[`${page}`][locale]
}

export default useLanguage