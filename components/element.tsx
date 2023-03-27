import React from 'react';
import {
    BaseElement,
    isTextElement,
    isCodeElement,
    isImageElement
} from '../lib/baseElement';
import CodeBlock from './code-block';

type ElementProps = {
    element: BaseElement;
};

export const Element: React.FC<ElementProps> = ({ element }) => {
    if (isTextElement(element)) {
        const { className, value, subtype } = element;
        const ElementTag = subtype as keyof JSX.IntrinsicElements;

        return <ElementTag className={className}>{value}</ElementTag>;
    }

    if (isCodeElement(element)) {
        const { language, value } = element;
        return <CodeBlock code={value} language={language} />;
    }

    if (isImageElement(element)) {
        const { className, src, alt } = element;
        return <img className={className} src={src} alt={alt || ''} />;
    }

    return null;
};
