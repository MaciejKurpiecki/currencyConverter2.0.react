import './App.css';
import Form from './Form';
import { Button } from './Button';
import { Footer } from './Footer';

function App() {
  return (
    <body>
      <Form
        button={<Button />}
        footer={<Footer
          date={"February 06, 2023"}
        />}
      />
    </body>
  );
}

export default App;
