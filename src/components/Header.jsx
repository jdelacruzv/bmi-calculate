import { useState, useEffect } from "react";
import styles from "./Header.module.css"

const Header = () => {	
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") === "light" ? "light" : "dark"
	);

	useEffect(() => {
		document
			.getElementsByTagName("body")[0]
			.setAttribute("data-theme", localStorage.getItem("theme"));
	}, [theme]);

	const handleThemeColor = () => {
		if (theme === "dark") {
			localStorage.setItem("theme", "light");
			setTheme("light");
		} else {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		}
	};
	
	return (
		<header className={styles.app__header}>
			<h1 className={styles.header__title}>Calcular IMC</h1>
			<button className={styles.btn__toggle} onClick={() => handleThemeColor()}>
				<img src="/mode.svg" alt="mode ligth" title={`Modo ${theme}`} />
			</button>
		</header>
	);
};

export default Header;