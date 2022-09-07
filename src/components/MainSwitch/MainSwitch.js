import { Routes, Route, Navigate } from "react-router-dom";
import { AboutUs, Cadre, Contact, Documents, Patroness, StartViev } from "../../components";

const MainSwitch = () => {
	return (
		<>
			<Routes>
				{/* <Route exact path="/" element={<StartViev />} /> */}
				<Route exact path="/onas" element={<AboutUs />} />
				<Route exact path="/kadra" element={<Cadre />} />
				<Route exact path="/kontakt" element={<Contact />} />
				<Route exact path="/dokumenty" element={<Documents />} />
				<Route exact path="/patronka" element={<Patroness />} />
				<Route exact path="/" element={<StartViev />} />
				{/* <Route path="*" element={<Navigate to="/" />} /> */}
			</Routes>
		</>
	);
};
export default MainSwitch;
