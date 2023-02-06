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
          date={"November 20, 2022"}
        />}
      />
    </body>
  );
}

export default App;
