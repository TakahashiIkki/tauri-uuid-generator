import React from 'react';

import { GenerateUUIDButton } from './components/uuid/GenerateUUIDButton';
import { DisplayUUIDField } from './components/uuid/DisplayUUIDField';
import {
  AppBar,
  Container,
  CardActions,
  CardContent,
  Typography,
  Box,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';

export const App = () => {
  const [uuids, setUuids] = React.useState<string[]>([]);
  const [uuidCount, setUuidCount] = React.useState<number>(1);

  const onHandleGenerateUUID = (data: string[]) => {
    setUuids(data);
  };

  const onHandleUUIDCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUuidCount(Number(event.target.value));
  };

  return (
    <Box>
      <AppBar position="static" style={{ padding: 10 }}>
        <Typography variant="h6" color="inherit" component="div">
          UUID生成
        </Typography>
      </AppBar>
      <Container>
        <CardContent style={{ textAlign: 'center' }}>UUID v4 のUUIDを生成します</CardContent>
        <CardContent style={{ textAlign: 'center' }}>
          <OutlinedInput
            id="gen-number"
            value={uuidCount}
            sx={{ width: '100px' }}
            onChange={onHandleUUIDCount}
            endAdornment={<InputAdornment position="end">回</InputAdornment>}
          />
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <GenerateUUIDButton uuidCount={uuidCount} onHandleGenerateUUID={onHandleGenerateUUID} />
        </CardActions>
        <CardActions style={{ justifyContent: 'center' }}>
          <DisplayUUIDField uuids={uuids} />
        </CardActions>
      </Container>
    </Box>
  );
};
