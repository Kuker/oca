import { AppBar, Box, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { PageView } from '../../components/PageView/PageView';

interface WebpageModel {
  href: string;
  label: string;
  index: number;
}

export const mockWebpages: WebpageModel[] = [
  {
    href: 'https://gmail.com',
    label: 'Gmail',
    index: 0,
  },
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    index: 1,
  },
];

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {<Box style={{ height: '100%' }}>{children}</Box>}
    </div>
  );
}

export const createTabs = (webPages: WebpageModel[]) => {
  return webPages.map((webPage) => <Tab label={webPage.label}></Tab>);
};

export const createTabContent = (webPages: WebpageModel[], chosenTab: number) => {
  return webPages.map((webPage) => (
    <TabPanel value={chosenTab} index={webPage.index} style={{ height: '100%' }}>
      <PageView href={webPage.href} style={{ height: '100%' }}></PageView>
    </TabPanel>
  ));
};

export const Homepage = () => {
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <>
      <AppBar position="static">
        <Tabs value={tabNumber} onChange={(_event, newTabNumber) => setTabNumber(newTabNumber)}>
          {createTabs(mockWebpages)}
        </Tabs>
      </AppBar>
      {createTabContent(mockWebpages, tabNumber)}
    </>
  );
};
