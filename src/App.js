import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Footer from "components/Footer";
import Instructor from "pages/Instructor";
import SignIn from "pages/SignIn";
import Class from "pages/Class";
import ClassId from "pages/ClassId";
import "assets/styles/tailwind.css";
import InstructorId from "pages/InstructorId";

function App() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/class" component={Class} />
          <Route exact path="/detail/:id" component={ClassId} />
          <Route exact path="/instructor" component={Instructor} />
          <Route exact path="/detailInstructor/:id" component={InstructorId} />
          <Route exact path="/login" component={SignIn} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
