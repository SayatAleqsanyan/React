import { useTranslation } from 'react-i18next';

const locales = {
  en: {title: 'en'},
  am: {title: 'am'},
  ru: {title: 'ru'},
}

function WrappedAdd() {
  const { t, i18n } = useTranslation()

  return (
    <div className='flex items-center justify-between text-2xl bg-gray-400 dark:bg-gray-700 text-black dark:text-white h-[50px] w-[100%]'>
      <h2 className='px-5'>{t('welcome')}</h2>

      <div className='flex gap-3 '>{Object.keys(locales).map(lang => (
        <button
        className={
          i18n.resolvedLanguage === locales[lang].title
            ? 'cursor-pointer hover:text-blue-800 px-4 py-2 font-bold'
            : 'cursor-pointer hover:text-blue-800 px-4 py-2'
        }
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
        >
          {locales[lang].title}
        </button>
      ))}</div>
    </div>
  )
}

export default WrappedAdd
