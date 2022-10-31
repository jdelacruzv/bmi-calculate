import { useState } from "react";
import styles from "./Form.module.css";
import RoundButton from "./RoundButton";

const Form = () => {
	const [weightInput, setWeightInput] = useState(0);
	const [heigthInput, setHeigthInput] = useState(0);
	const [bmi, setBmi] = useState(0);

	const getResultBmi = (ev) => {
		ev.preventDefault();
		if (!weightInput && !heigthInput) return null
		// convierto a mt porque viene en cm	
		const hInput = heigthInput / 100;
		const total = (weightInput / (hInput * hInput)).toFixed(1);
		setBmi(total);
	};

	return (
		<form className={styles.app__form} onSubmit={(ev) => getResultBmi(ev)}>
			<label className={styles.label__title} htmlFor="weight">
				Peso (kg)
			</label>
			<input
				className={styles.input__box}
				type="number"
				name="weight"
				value={weightInput}
				min="0"
				onChange={(ev) => setWeightInput(ev.target.value)}
			/>
			<label className={styles.label__title} htmlFor="heigth">
				Altura (cm)
			</label>
			<input
				className={styles.input__box}
				type="number"
				name="heigth"
				value={heigthInput}
				min="0"
				onChange={(ev) => setHeigthInput(ev.target.value)}
			/>
			<button className={styles.btn__calulate} type="submit">Calcular</button>
			<div className={styles.result}>
				<p className={styles.result__text}>{`IMC = ${bmi}`}</p>
				<RoundButton value={bmi} />
			</div>
		</form>
	);
};

export default Form;
