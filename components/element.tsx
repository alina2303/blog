import React from 'react';
import {
    BaseElement,
    TextElement,
    CodeElement,
    ImageElement,
    isTextElement,
    isCodeElement,
    isImageElement
} from '../lib/baseElement';


type ElementProps = {
    element: BaseElement;
};

const Element: React.FC<ElementProps> = ({ element }) => {
    if (isTextElement(element)) {
        const { className, value } = element as TextElement;
        return <p className={className}>{value}</p>;
    }

    if (isCodeElement(element)) {
        const { className, value } = element as CodeElement;
        return (
            <pre className={className}>
                <code>{value}</code>
            </pre>
        );
    }

    if (isImageElement(element)) {
        const { className, src, alt } = element as ImageElement;
        return <img className={className} src={src} alt={alt || ''} />;
    }
    return null;
};