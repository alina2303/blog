import React from 'react';
import { BaseElement, TextElement, CodeElement, ImageElement } from '../lib/baseElement';


export function Element(element: BaseElement): JSX.Element | null {
    switch (element.type) {
      case 'text': {
        const { className, value } = element as TextElement;
        return (<p className={className}>{value}</p>);
      }
      case 'code': {
        const { className, value } = element as CodeElement;
        return (
          <pre className={className}>
            <code>{value}</code>
          </pre>
        );
      }
      case 'image': {
        const { className, src, alt } = element as ImageElement;
        return <img className={className} src={src} alt={alt || ''} />;
      }
      default:
        return null;
    }
}