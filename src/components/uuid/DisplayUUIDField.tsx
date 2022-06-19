import React from 'react';
import { writeClipboard } from '../../functionals/clipboard';
import { HiClipboardCopy } from 'react-icons/hi';

type GenerateUUIDButtonProps = {
  uuid: string;
};

export const DisplayUUIDField = (props: GenerateUUIDButtonProps) => {
  return (
    <div
      style={{
        width: '300px',
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
      }}
      onFocus={() => {
        writeClipboard(props.uuid);
      }}
    >
      <input
        type="text"
        readOnly
        value={props.uuid}
        style={{ border: 'none', outline: 'none', flex: 1, textAlign: 'center', cursor: 'pointer' }}
      />
      <HiClipboardCopy style={{ padding: '10px' }} />
    </div>
  );
};
