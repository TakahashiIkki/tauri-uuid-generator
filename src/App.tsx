import React from 'react';

import { GenerateUUIDButton } from './components/uuid/GenerateUUIDButton';
import { DisplayUUIDField } from './components/uuid/DisplayUUIDField';
import { AppBar, Card, CardActions, CardContent, Typography, Container } from '@mui/material';

export const App = () => {
  const [uuid, setUuid] = React.useState<string>('');

  const onHandleGenerateUUID = (data: string) => {
    setUuid(data);
  };

  return (
    <Container style={{ margin: 10 }}>
      <AppBar position="static" style={{ padding: 10 }}>
        <Typography variant="h6" color="inherit" component="div">
          UUID生成
        </Typography>
      </AppBar>
      <Card variant="outlined">
        <CardContent style={{ textAlign: 'center' }}>UUID v4 のUUIDを生成します</CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <GenerateUUIDButton onHandleGenerateUUID={onHandleGenerateUUID} />
        </CardActions>
        <CardActions style={{ justifyContent: 'center' }}>
          <DisplayUUIDField uuid={uuid} />
        </CardActions>
      </Card>
    </Container>
  );
};
