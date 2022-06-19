import React from 'react';
import { generateUUIDv4 } from '../../functionals/uuid';

export type GenerateUUIDButtonProps = {
  onHandleGenerateUUID: (data: string) => void;
};

export const GenerateUUIDButton = (props: GenerateUUIDButtonProps) => {
  return (
    <button
      onClick={() => {
        props.onHandleGenerateUUID(generateUUIDv4());
      }}
    >
      生成
    </button>
  );
};
