import { clsx } from 'clsx'; 

import { Slot } from '@radix-ui/react-slot'

import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot ({children} : TextInputRootProps) {
    return(
        <div className='flex items-center gap-3 py-4 h-12 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    );
}

TextInputRoot.displayName ='TextInput.Root'

export interface TextInputIconPros {
    children: ReactNode;
}

function TextInputIcon ({children}: TextInputIconPros) {
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    );
}

TextInputIcon.displayName ='TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput (props : TextInputInputProps) {
    return (
        <input 
            className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'
            {...props}
        />
    );
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}

TextInputInput.displayName ='TextInput.Input'