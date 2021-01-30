import { AppBar, Box, Button, Tab, Tabs } from '@material-ui/core';
import React from 'react';

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
        {(
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  

  const getTabs = (value: any) => [
    [
        (<Tab label="Gmail" />),
        (<TabPanel value={value} index={0}>
            <p></p>
            <webview src="https://gmail.com" style={{width: '500px', height: '500px'}}></webview>
        </TabPanel>)
    ],
    [
        (<Tab label="Facebook" />),
        (<TabPanel value={value} index={1}>
            <webview src="https://facebook.com" style={{width: '500px', height: '500px'}}></webview>
        </TabPanel>)
    ],
    [
        (<Tab label="Notifications" />),
        (<TabPanel value={value} index={2}>
            <webview id="web-view2"  preload="./preload.js" src="https://web-push-book.gauntface.com/demos/notification-examples/" style={{width: '500px', height: '500px'}}></webview>
            {document.querySelector('#web-view2')?.addEventListener('console-message', (e) => {
              console.log('webview2 logged message: ', e);
            })
            }
            {document.querySelector('#web-view2')?.addEventListener('notification-shim', (e) => {
              console.log('notification-shim2: ', e);
            })}
        </TabPanel>)
    ],
    [
        (<Tab label="Notifications 2" />),
        (<TabPanel value={value} index={3} preload="./preload.js">
            <webview id="web-view" src="https://www.bennish.net/web-notifications.html" style={{width: '500px', height: '500px'}}></webview>
            {document.querySelector('#web-view')?.addEventListener('console-message', (e) => {
              console.log('webview logged message: ', e);
            })
            }
            {document.querySelector('#web-view')?.addEventListener('notification-shim', (e) => {
              console.log('notification-shim: ', e);
            })}
        </TabPanel>)
    ]
]

const Homepage =
// React.memo(
     () => {
    const [value, setValue] = React.useState(0);
    const [testVal, setTestVal] = React.useState(0);
    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
      };
      const tabs = getTabs(value
        );
        console.log('inside homepage')

    return (
    <>
    {console.log('inside return')};
        <Button onClick={()=>setTestVal(testVal+1)} />
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            {tabs.map((tab)=> {
                return tab[0];
            })}
            </Tabs>
        </AppBar>
        {tabs.map((tab) => tab[1])}
    </>
    )
}
//);

export default Homepage;