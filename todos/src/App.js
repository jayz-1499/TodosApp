import './App.css';
import TodoApp from './components/TodoApp/todoApp';
import { Provider } from 'react-redux';
import {store} from './redux/Store/store.jsx';
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
