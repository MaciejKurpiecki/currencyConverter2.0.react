import Form from './Form';
import { Footer } from './Footer';
import { useRatesData } from './Form/useRatesData';

function App() {
  const {
    date,
  } = useRatesData();
  return (
    <main>
      <Form
        footer={<Footer
          date={date}
        />}
      />
    </main>
  );
}

export default App;
