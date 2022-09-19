import { HashRouter as Router } from "react-router-dom";
import { Fragment } from "react";
import { Footer, Header, ImportantBox, MainSwitch, Spinner, TopArrow } from "./components";

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
			<ImportantBox />
		</Router>
	);
};

export default App;
