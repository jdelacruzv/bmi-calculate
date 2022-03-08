import { useState, useRef, useEffect } from "react";
import styles from "./Form.module.css";

const Form = () => {
	const weightRef = useRef(null);
	const heightRef = useRef(null);
	const [bmi, setBmi] = useState(0);
	const sexSelectRef = useRef(null);

	const getResultBmi = (e) => {
		e.preventDefault();
		const wRef = weightRef.current.valueAsNumber;
		// convierto a cm porque viene en mt
		const hRef = heightRef.current.valueAsNumber / 100;
		const result = wRef / (hRef * hRef);
		setBmi(result);
	};

	// TODO: hacer una funcion que reciba dos parametros (bmi, sexo) para determinar
	// el resultado qye sera mostrado.
	const showSelected = () => {
		let sexRef = sexSelectRef.current.value;
		if (sexRef === "female") {
			console.log(sexRef);
		} else {
			console.log(sexRef);
		}
	};

	useEffect(() => {
		if (weightRef.current) weightRef.current.focus();
	}, []);

	return (
		<form className={styles.app__form} onSubmit={(e) => getResultBmi(e)}>
			<label className={styles.label__title} htmlFor="weight">
				Peso (kg)
			</label>
			<input
				className={styles.input__box}
				type="number"
				id="weight"
				name="weight"
				defaultValue="0"
				min="1"
				ref={weightRef}
			/>

			<label className={styles.label__title} htmlFor="height">
				Altura (cm)
			</label>
			<input
				className={styles.input__box}
				type="number"
				id="height"
				name="height"
				defaultValue="0"
				min="1"
				ref={heightRef}
			/>

			<div className={styles.sex}>
				<label className={styles.label__title}>Sexo</label>
				<select
					className={styles.sex__select}
					id="gender"
					name="gender"
					ref={sexSelectRef}
					onChange={showSelected}
				>
					<option value="female">Femenino</option>
					<option value="male">Masculino</option>
				</select>
			</div>

			<button className={styles.btn__calculate} type="submit">
				Calcular
			</button>

			<div className={styles.result}>
				<p className={styles.result__text}>{`IMC => ${bmi.toFixed(1)}`}</p>
				<button className={styles.result__circle}></button>
			</div>
		</form>
	);
};

export default Form;
