import React from 'react';
import { generateUUIDv4 } from '../../functionals/uuid';
import { Button } from '@mui/material';

export type GenerateUUIDButtonProps = {
  onHandleGenerateUUID: (data: string) => void;
};

export const GenerateUUIDButton = (props: GenerateUUIDButtonProps) => {
  return (
    <Button
      color={'primary'}
      variant={'contained'}
      onClick={() => {
        props.onHandleGenerateUUID(generateUUIDv4());
      }}
    >
      生成
    </Button>
  );
};
