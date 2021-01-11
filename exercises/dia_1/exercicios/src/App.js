import logo from './logo.svg';
import './App.css';

const tarefas = ["amar", "rezar", "dormir", "jogar video games"]

const App = () => (<ul>{tarefas.map(tarefa => <li>{tarefa}</li>)}</ul>)

export default App;
