import React, { useEffect, useState } from 'react';
import { writeClipboard } from '../../functionals/clipboard';
import { HiClipboardCheck, HiClipboardCopy } from 'react-icons/hi';
import { Button, Snackbar } from '@mui/material';

type GenerateUUIDButtonProps = {
  uuid: string;
};

export const DisplayUUIDField = (props: GenerateUUIDButtonProps) => {
  const [copyIcon, setCopyIcon] = useState<'finish' | 'copy' | ''>('');
  const [showSnackBar, setShowSnackBar] = useState(false);

  const getIcon = () => {
    switch (copyIcon) {
      case 'copy':
        return <HiClipboardCopy />;
      case 'finish':
        return <HiClipboardCheck />;
      default:
        return undefined;
    }
  };

  useEffect(() => {
    if (!props.uuid) {
      setCopyIcon('');
      return;
    }
    setCopyIcon('copy');
  }, [props.uuid]);

  useEffect(() => {
    return setShowSnackBar(copyIcon === 'finish');
  }, [copyIcon]);

  return (
    <div
      tabIndex={0}
      onBlur={() => {
        setCopyIcon('copy');
      }}
    >
      <Button
        endIcon={getIcon()}
        onClick={() => {
          writeClipboard(props.uuid).then(() => setCopyIcon('finish'));
        }}
      >
        {props.uuid}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showSnackBar}
        autoHideDuration={1000}
        message="UUIDをクリップボードにコピーしました"
      />
    </div>
  );
};
