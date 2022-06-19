import React from 'react';
import { writeClipboard } from '../../functionals/clipboard';
import { HiClipboardCopy } from 'react-icons/hi';

type GenerateUUIDButtonProps = {
  uuid: string;
};

export const DisplayUUIDField = (props: GenerateUUIDButtonProps) => {
  return (
    <div>
      <input type="text" readOnly value={props.uuid} size={36} />
      <button
        onClick={() => {
          writeClipboard(props.uuid);
        }}
      >
        <HiClipboardCopy />
      </button>
    </div>
  );
};
