import Form from './Form';
import { Footer } from './Footer';

function App() {
  return (
    <main>
      <Form
        footer={<Footer />}
      />
    </main>
  );
}

export default App;
