'use client'

import {ReactNode} from 'react';
import {Disclosure} from '@headlessui/react';
import {HiChevronDown} from 'react-icons/hi';


// A `<Question>` component that wraps a toggleable disclosure around its answer. Pass the question as `props.name`
// and the answer as children.
// TODO: transitions?
export default function Question(props: { name: string, children: ReactNode }) {
    return (
        <Disclosure as="div" className="flex flex-col gap-2">
            {({ open }) => (<>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-left">
                    {props.name}
                    <HiChevronDown className={'w-5 h-5 transition-transform duration-300 ease-in-out' + (open ? ' rotate-180' : '')} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-3 pt-2 pb-3 font-light">
                    {props.children}
                </Disclosure.Panel>
            </>)}
        </Disclosure>
    )
}
