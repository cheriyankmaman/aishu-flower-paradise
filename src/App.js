import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import {Services, ServicesOne, ServicesTwo} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Home from './pages/Home';
import Contact from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Footer from './components/Footer';
import { ConnectOne, ConnectTwo, ConnectThree } from './pages/Connect';
import { UsefullinksOne, UsefullinksTwo, UsefullinksThree } from './pages/Usefullinks';
import { PolicyOne, PolicyTwo, PolicyThree } from './pages/Policy';
import { ContactsOne, ContactsTwo, ContactsThree } from './pages/Contacts';

function App() {
	return (
		<div>
			<Footer />
		

	<Router>
	<Sidebar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path="/about-us" exact component={AboutUs} />
		<Route path="/services" exact component={Services} />
		<Route path="/services/services1" exact component={ServicesOne} />
		<Route path="/services/services2" exact component={ServicesTwo} />
		<Route path="/contact" exact component={Contact} />
		<Route path="/events" exact component={Events} />
		<Route path="/events/events1" exact component={EventsOne} />
		<Route path="/events/events2" exact component={EventsTwo} />
		<Route path="/signup" exact component={SignUp} />

		
		<Route path="/youtube" exact component={ConnectOne} />
		<Route path="/facebook" exact component={ConnectTwo} />
		<Route path="/instagram" exact component={ConnectThree} />

		<Route path="/blog" exact component={UsefullinksOne} />
		<Route path="/products" exact component={UsefullinksTwo} />
		<Route path="/announcements" exact component={UsefullinksThree} />

		<Route path="/privacy" exact component={PolicyOne} />
		<Route path="/return" exact component={PolicyTwo} />
		<Route path="/terms" exact component={PolicyThree} />

		<Route path="/kochi" exact component={ContactsOne} />
		<Route path="/kottayam" exact component={ContactsTwo} />
		<Route path="/trivandrum" exact component={ContactsThree} />

	</Switch>
	</Router>


		</div>
);
}

export default App;
