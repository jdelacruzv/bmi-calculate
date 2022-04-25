import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import "./styles/app.css";

const App = () => {
	return (
		<div className="app">
			<Header />
			<Form />
			<Table />
		</div>
	);
};

export default App;
