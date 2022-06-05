// import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { Title } from './components/Title';
import CompTabs from './components/CompTabs';

function App() {
  return (
    <Box padding={'1rem'}>
      <Title />
      <CompTabs />
    </Box>
  );
}

export default App;
