import TimerBack from './components/TimerBack/TimerBack';

function App() {

  return <>
    <TimerBack title="Tomorrow" dateStr="2024-12-28" />
    <TimerBack title="New Year" dateStr="2025-01-01" />
    <TimerBack title="Evening" dateStr="2024-12-27 20:20:20"/>
  </>
}

export default App;
