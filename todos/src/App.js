import './App.css';
import TodoApp from './components/TodoApp/todoApp';
import { store } from '../src/redux/Store/store.jsx';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
