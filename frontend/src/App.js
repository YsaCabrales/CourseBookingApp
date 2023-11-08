import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import CourseList from './components/course/CourseList'
import CourseForm from './components/course/CourseForm'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Navbar from './components/Navbar'

const getToken = () => {
  return localStorage.getItem('token')
}

function App() {
  const token = getToken();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={token ? <CourseList /> : <Navigate to="/login" />}
        />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courselist' element={<CourseList />} />
        <Route path='/createcourse' element={<CourseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
