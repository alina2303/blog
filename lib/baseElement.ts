export interface BaseElement {
    type: string;
    className?: string;
}

export interface TextElement extends BaseElement {
    type: 'text';
    subtype: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'em' | 'strong';
    value: string;
}

export interface CodeElement extends BaseElement {
    type: 'code';
    language: string;
    filePath?: string;
    value?: string
}


export interface ImageElement extends BaseElement {
    type: 'image';
    src: string;
    alt?: string;
}

export function isTextElement(element: BaseElement): element is TextElement {
    return element.type === 'text';
}

export function isCodeElement(element: BaseElement): element is CodeElement {
    return element.type === 'code';
}

export function isImageElement(element: BaseElement): element is ImageElement {
    return element.type === 'image';
}

// // Example usage:

// const elements: BaseElement[] = [
//     { type: 'text', className: 'h1', value: 'Hello, world!' },
//     { type: 'code', className: 'code', value: 'console.log("Hello, world!");' },
//     { type: 'image', src: 'https://example.com/image.jpg', alt: 'An example image' },
// ];

// elements.forEach((element) => {
//     if (isTextElement(element)) {
//         // element is a TextElement
//         console.log(`Text: ${element.value}`);
//     } else if (isCodeElement(element)) {
//         // element is a CodeElement
//         console.log(`Code: ${element.value}`);
//     } else if (isImageElement(element)) {
//         // element is an ImageElement
//         console.log(`Image: ${element.src}`);
//     }
// });
