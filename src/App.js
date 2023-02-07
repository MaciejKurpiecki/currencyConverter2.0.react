import './App.css';
import Form from './Form';
import { Button } from './Button';
import { Footer } from './Footer';

function App() {
  return (
    <main>
      <Form
        footer={<Footer
          date={"February 06, 2023"}
        />}
      />
    </main>
  );
}

export default App;
