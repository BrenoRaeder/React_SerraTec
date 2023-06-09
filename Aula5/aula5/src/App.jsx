import './App.css'
import { DefaultButton } from './common/components/DefaultButton';
import { DefaultInput } from './common/components/DefaultInput';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <div className="container-inputs">
        <DefaultInput state="error" message="Digite o texto" />
        <DefaultButton type="sucess"/>
      </div>
      
    </>
  )
}

export default App
