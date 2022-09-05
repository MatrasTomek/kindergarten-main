import { Routes, Route, Navigate } from "react-router-dom";
import { AboutUs, Cadre, Patroness } from "../../components";

const MainSwitch = () => {
	return (
		<>
			<Routes>
				{/* <Route exact path="/" element={<StartViev />} /> */}
				<Route exact path="/onas" element={<AboutUs />} />
				<Route exact path="/patronka" element={<Patroness />} />
				<Route exact path="/kadra" element={<Cadre />} />
				{/* <Route path="*" element={<Navigate to="/" />} /> */}
			</Routes>
		</>
	);
};
export default MainSwitch;
