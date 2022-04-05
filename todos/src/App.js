import './App.css';
import TodoApp from './components/TodoApp/todoApp';
import { Provider } from 'react-redux';
import {store} from './redux/Store/store.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <TodoApp /> */}
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<TodoApp />} /> 
        <Route path="Active" element={<TodoApp />} /> 
        <Route path="Complete" element={<TodoApp />} /> 
        </Routes>
        </BrowserRouter> 
      </div>
    </Provider>
  );
}

export default App;
