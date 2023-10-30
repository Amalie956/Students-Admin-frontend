import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home, { Students, StudentDetail, Courses, CourseDetail } from './CreateComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul> 
                <li><Link to="/home">Hjem</Link></li> {/* Ændret linkteksten til "Hjem" og stien til "/home" */}
                <li><Link to="/students">Studerende</Link></li> {/* Ændret linkteksten til "Studerende" og stien til "/students" */}
                <li><Link to="/studentDetail">Detaljer om studerende</Link></li> {/* Ændret linkteksten og stien */}
                <li><Link to="/courses">Kurser</Link></li> {/* Ændret linkteksten til "Kurser" og stien til "/courses" */}
                <li><Link to="/courseDetail">Detaljer om kurser</Link></li> {/* Ændret linkteksten og stien */}
              </ul>
            </nav>

            {/* Routes: */}
            <Routes>
            <Route path="/" />
              <Route path="/home" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/studentDetail" element={<StudentDetail />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courseDetail" element={<CourseDetail />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
