import { Routes, Route, Navigate } from "react-router-dom";
import { AboutUs } from "../../components";

const MainSwitch = () => {
	return (
		<>
			<Routes>
				{/* <Route exact path="/" element={<StartViev />} /> */}
				<Route exact path="/onas" element={<AboutUs />} />
				{/* <Route path="*" element={<Navigate to="/" />} /> */}
			</Routes>
		</>
	);
};
export default MainSwitch;
