import { HashRouter as Router } from "react-router-dom";
import { Fragment } from "react";
import { Footer } from "./components";

const App = () => {
	return (
		<Router>
			{/* <Header /> */}
			<Fragment>{/* <MainSwitch /> */}</Fragment>
			<Footer />
			{/* <Spinner />
			<TaskInformation />
			<TopArrow /> */}
		</Router>
	);
};

export default App;
