import React, { useEffect, useState } from 'react';
import { writeClipboard } from '../../functionals/clipboard';
import { HiClipboardCheck, HiClipboardCopy } from 'react-icons/hi';
import { Button, Snackbar } from '@mui/material';

type GenerateUUIDButtonProps = {
  uuids: string[];
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
    if (!props.uuids.length) {
      setCopyIcon('');
      return;
    }
    setCopyIcon('copy');
  }, [props.uuids]);

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
          writeClipboard(props.uuids.join('\n')).then(() => setCopyIcon('finish'));
        }}
        style={{ whiteSpace: 'pre-line' }}
      >
        {props.uuids.join('\n')}
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
