import { useState, useRef } from 'react';
import { SearchIcon } from '@/components/icons/search';
import { Transition } from '@/components/ui/transition';
import AnchorLink from '@/components/ui/links/anchor-link';
import { useClickAway } from '@/lib/hooks/use-click-away';
import { useModal } from '@/components/modal-views/context';
import { Close } from '@/components/icons/close';

type TagProps = {
  label: string;
  link: string;
};

export function Tag({ label, link }: TagProps) {
  return (
    <AnchorLink
      href={link}
      className="mr-2.5 mt-2.5 inline-flex transform rounded-xl bg-gray-800 px-2.5 py-1.5 text-xs font-medium tracking-tighter text-white shadow-light outline-none transition-transform duration-200 last:mr-0 hover:-translate-y-0.5 hover:bg-gray-50 focus:-translate-y-0.5 focus:bg-gray-50 xs:mr-3 xs:mt-3 xs:px-3 xs:py-2 xs:text-sm"
    >
      {label}
    </AnchorLink>
  );
}

type SearchFromProps = {
  placeholder?: string;
};

const tags = [
  {
    label: 'illustration',
    link: '#',
  },
  {
    label: '3d',
    link: '#',
  },
  {
    label: 'animation',
    link: '#',
  },
  {
    label: 'digital',
    link: '#',
  },
  {
    label: 'fanart',
    link: '#',
  },
  {
    label: 'concept',
    link: '#',
  },
  {
    label: 'sports',
    link: '#',
  },
  {
    label: 'fantasy',
    link: '#',
  },
  {
    label: 'abstract',
    link: '#',
  },
  {
    label: 'colorful',
    link: '#',
  },
  {
    label: 'modern',
    link: '#',
  },
];

export function SearchFrom({ placeholder = 'Search...' }: SearchFromProps) {
  const { closeModal } = useModal();
  let [showSuggestion, setShowSuggestion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    setShowSuggestion(false);
  });

  return (
    <div className="relative" ref={ref} onFocus={() => setShowSuggestion(true)}>
      <form
        className="relative flex w-full rounded-full"
        noValidate
        role="search"
      >
        <label className="flex w-full items-center">
          <input
            className="h-12 w-full appearance-none rounded-full border-2 border-gray-600 bg-light-dark py-1 pr-5 pl-11 text-sm tracking-tighter text-white outline-none transition-all placeholder:text-gray-500 focus:border-gray-500 sm:pl-14 xl:pl-16"
            placeholder={placeholder}
            autoComplete="off"
          />
          <span className="pointer-events-none absolute left-0 flex h-full w-10 cursor-pointer items-center justify-center pl-2 text-white hover:text-gray-900 sm:w-14 sm:pl-3 xl:w-16">
            <SearchIcon className="h-4 w-4" />
          </span>
        </label>
        <div
          className="ml-3.5 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-light-dark xl:hidden"
          onClick={() => closeModal()}
        >
          <Close className="h-auto w-3 text-white" />
        </div>
      </form>

      <Transition
        show={showSuggestion}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
      >
        <div className="absolute left-0 top-full mt-3.5 w-full rounded-xl bg-light-dark p-5 shadow-large xs:mt-4 xs:p-6">
          <h3 className="mb-2 text-sm font-medium tracking-tighter text-white xs:mb-2.5 xs:text-base">
            Tags
          </h3>

          {tags.map((tag, index) => (
            <Tag key={index} label={tag.label} link={tag.link} />
          ))}
        </div>
      </Transition>
    </div>
  );
}

export default function SearchView({ ...props }) {
  return (
    <div
      className="relative z-50 mx-auto w-full max-w-full xs:w-[480px] sm:w-[600px] lg:w-[900px]"
      {...props}
    >
      <SearchFrom />
    </div>
  );
}
