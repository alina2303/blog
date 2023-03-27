import React from 'react';
import { BaseElement } from '../lib/baseElement';
import { Element } from './element';

type ElementListProps = {
  elements: BaseElement[];
};

const ElementList: React.FC<ElementListProps> = ({ elements }) => {
  return (
    <div>
      {elements.map((element, index) => (
        <div key={index}>{<Element element={element} />}</div>
      ))}
    </div>
  );
};

export default ElementList;