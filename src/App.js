import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import Home from './Home';
import LoginPageContent from './Login';
import StudentLogin from './StuLogin';
import Dashboard from './Dashboard'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPageContent />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route
          path="/dashboard"
          element={
            <ProLayout
              title="LMS Admin"
              logo=  './assets/Sunlogo.png' // Use the imported image
              logoStyle={{ width: 'auto', height: 'auto' }} // Inline style
              menuItemRender={(item, dom) => (
                <a href={item.path}>
                  {dom}
                </a>
              )}
              headerContentRender={() => (
                <div className="header-logo">LMS Admin</div>
              )}
              contentStyle={{ padding: 24, minHeight: 280 }}
              fixedHeader
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* Additional admin routes can be added here */}
              </Routes>
            </ProLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
