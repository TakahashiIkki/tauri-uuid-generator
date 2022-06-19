import React from 'react';

import { GenerateUUIDButton } from './components/uuid/GenerateUUIDButton';
import { DisplayUUIDField } from './components/uuid/DisplayUUIDField';

export const App = () => {
  const [uuid, setUuid] = React.useState<string>('');

  const onHandleGenerateUUID = (data: string) => {
    setUuid(data);
  };

  return (
    <div className="App">
      UUID v4 のUUIDを生成します
      <GenerateUUIDButton onHandleGenerateUUID={onHandleGenerateUUID} />
      <DisplayUUIDField uuid={uuid} />
    </div>
  );
};
