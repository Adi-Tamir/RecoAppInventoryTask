import { styled } from '@stitches/react';
import React, { useState } from 'react';
import { PageHeader } from '../Components/Text';

const ROW_OPTIONS = [25, 50];

export function AppInventory() {

    const [rows, setRows] = useState(25);
    

    return (
      <AppInventoryContainer>
        <PageHeader>App Inventory</PageHeader>
      </AppInventoryContainer>
    );
  }

  const AppInventoryContainer = styled('div', {margin: '24px'});

