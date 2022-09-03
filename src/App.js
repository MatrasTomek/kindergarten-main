import { HashRouter as Router } from "react-router-dom";
import { Fragment } from "react";
import { Footer, Header, MainSwitch, Spinner, TopArrow } from "./components";

const App = () => {
	return (
		<Router>
			<Header />
			<Fragment>
				<MainSwitch />
			</Fragment>
			<Footer />
			<Spinner />
			{/* <TaskInformation /> */}
			<TopArrow />
		</Router>
	);
};

export default App;
