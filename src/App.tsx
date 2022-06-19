import React from 'react';
import { v4 as generateUuidV4 } from 'uuid';
import { HiClipboardCopy } from 'react-icons/hi';

export const App = () => {
  const [uuid, setUuid] = React.useState<string>('');

  return (
    <div className="App">
      UUID v4 のUUIDを生成します
      <button
        onClick={() => {
          setUuid(generateUuidV4());
        }}
      >
        生成
      </button>
      <div>
        <input type="text" readOnly value={uuid} size={36} />
        <button
          onClick={() => {
            navigator.clipboard.writeText(uuid);
          }}
        >
          <HiClipboardCopy />
        </button>
      </div>
    </div>
  );
};
