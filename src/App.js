import './App.css';
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import LandindFooter from './components/LandingFooter';
import LandingPage from './pages/LandingPage';
import LandingHeader from './components/LandingHeader';
import Intern_Login_Page from './pages/Intern_Login_Page';
import Employer_Login_Page from './pages/Employer_Login_Page';
import Employer_Signup_Page from './pages/Employer_Signup_Page';
import Intern_Signup_Page from './pages/Intern_Signup_Page';
import Intern_Landing_Page from './pages/Intern_Landing_Page';
import Intern_Dashboard from './pages/Intern_Dashboard';
import Employer_Dashboard from './pages/Employer_Dashboard';
import Post_Job_Form from './pages/Post_Job_Form';
import Apply_Job_Form from './pages/Apply_Job_Form';




function App() {

  const router = createBrowserRouter([
    
    // Route for Landing Page
    {
      path: "/",
      element: (
        <LandingPage />
      ),
    },


    // Route for Intern Login Page
    {
      path: "/login/intern",
      element: (
        <Intern_Login_Page />
      ),
    },


    {
      path: "/signup/intern",
      element: (
        <Intern_Signup_Page />
      ),
    },



    // Route for Employer Login Page

    {
      path: "/login/employer",
      element: (
        <Employer_Login_Page />
      ),
    },

    // Route for Employer Signup Page
    {
      path: "/signup/employer",
      element: (
        <Employer_Signup_Page />
      ),
    },


    {
      path: "/employer/dashboard",
      element: (
        <Employer_Dashboard />
      ),
    },

      // Route for employer post a job
    {
      path: "/employer/postjob",
      element: (
        <Post_Job_Form />
      ),
    },

    // Route to intern dashboard
    {
      path: "/intern/dashboard",
      element: (
        <Intern_Dashboard />
      ),
    },

    // route to apply intern
    {
      path: "/intern/dashboard/applyjob",
      element: (
        <Apply_Job_Form />
      ),
    },


  ]);


  return (
    <div className="App">

      <LandingHeader />

            <RouterProvider router={router} />    
           {/* <Employer_Dashboard /> */}
           {/* <Employer_Dashboard />
           <Post_Job_Form /> */}

           {/* < Intern_Dashboard /> */}

           {/* < Apply_Job_Form /> */}


           {/* < Intern_Landing_Page /> */}


      <LandindFooter />
     
      

    </div>

  );
}

export default App;
