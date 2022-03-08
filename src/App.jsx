import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import styles from "./App.module.css";

const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<Form />
			<Table />
		</div>
	);
};

export default App;
