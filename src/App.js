import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import StatisticGroup from "./components/StatisticGroup";

function App() {
  return (
   <Container>

     <MainHeader title="Budget" />

    <StatisticGroup size="small" label="Your Balance:" value="2,550.53" />

    <DisplayBalances />

    <MainHeader title="History" type="h3" />
    
    <EntryLine name="Something" amount="$10.00" />
    <EntryLine isExpense name="Something else" amount="$100.00" />
    <EntryLine name="Something" amount="$20.00" />

    <MainHeader title="Add new transaction" type="h3" />
    <NewEntryForm />
   </Container>
  );
}

export default App;