import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const languages = [
  { id: 1, name: 'json' },
  { id: 2, name: 'javascript' },
  { id: 3, name: 'typescript' },
  { id: 4, name: 'java' },
  { id: 5, name: 'swift' },
  { id: 6, name: 'objective-c' },
  { id: 7, name: 'swift' },
  { id: 8, name: 'kotlin' },
  { id: 9, name: 'sql' },
  { id: 10, name: 'python' },
  { id: 11, name: 'markdown' },
  { id: 12, name: 'php' },
  { id: 13, name: 'perl' },
  { id: 14, name: 'css' },
  { id: 15, name: 'xml' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageComboBox({selectedLanguage, setSelectedLanguage}) {
  const [query, setQuery] = useState('')
  
  const filteredLanguages =
    query === ''
      ? languages
      : languages.filter((language) => {
          return language.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox as="div" value={selectedLanguage} onChange={setSelectedLanguage}>
      <div className="relative text-gray-900">
        <Combobox.Input
          className="w-[140px] rounded-md border border-gray-300 bg-white py-1.5 pl-2.5 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(language) => language?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredLanguages.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-y-scroll scrollbar rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredLanguages.map((language) => (
              <Combobox.Option
                key={language.id}
                value={language}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{language.name}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
