import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { LayoutContainer } from '../styled-components';
import { useAsync, useFetchLoader } from '../hooks';
import { getCoolMorty, getCoolRick } from '../services';

const Component1 = () => {
  const { loading, callEndpoint } = useFetchLoader();
  const [morty, setMorty] = useState(null);
  const getApiData = async () => await callEndpoint(getCoolMorty());

  const adaptMorty = (data: any) => {
    setMorty(data.name);
  };

  useAsync(getApiData, adaptMorty, () => {});
  return <div>{loading ? 'LOADING' : morty}</div>;
};

function Component2() {
  const { loading, callEndpoint } = useFetchLoader();
  const [rick, setRick] = useState(null);

  const getApiData = async () => await callEndpoint(getCoolRick());

  const adaptRick = (data: any) => {
    setRick(data.name);
  };

  useAsync(getApiData, adaptRick, () => {}, []);
  return <div>{loading ? 'LOADING' : rick}</div>;
}

export const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  return (
    <LayoutContainer>
      <div style={{ fontSize: '3rem' }}>
        <div>Buenas buenas mi gente !</div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ fontSize: '3rem' }} label="Item One" {...a11yProps(0)} />
          <Tab style={{ fontSize: '3rem' }} label="Item Two" {...a11yProps(1)} />
        </Tabs>
        <div role="tabpanel"> {value === 0 ? <Component1 /> : <Component2 />}</div>
      </div>
    </LayoutContainer>
  );
};

export default Dashboard;