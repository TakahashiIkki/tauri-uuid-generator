import React from 'react';

import { GenerateUUIDButton } from './components/uuid/GenerateUUIDButton';
import { DisplayUUIDField } from './components/uuid/DisplayUUIDField';
import { AppBar, Container, CardActions, CardContent, Typography, Box } from '@mui/material';

export const App = () => {
  const [uuids, setUuids] = React.useState<string[]>([]);
  const [uuidCount, setUuidCount] = React.useState<number>(3);

  const onHandleGenerateUUID = (data: string[]) => {
    setUuids(data);
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
