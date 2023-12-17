import Link, { LinkProps } from 'next/link'
import { i18n } from '@/i18n.config'

type CustomLinkProps = LinkProps & {
  lang: Locale;
};

export default function CustomLink({ href, lang, ...props }: CustomLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale
  const path = isDefaultLang ? href : `/${lang}${href}`
  return <Link href={path} {...props} />
}
