import './App.css';

const App = () => {
	return (
		<div className="app">
			<header className="app__header">
				<h1 className="header__title">BMI- Calculate</h1>
				<span className="toggle">Ligth</span>
			</header>

			<form className="app__form">
				<div className="sex">
					<label className="label__title">Sexo</label>
					<select className="sex__select" name="gender">
						<option value="female">Femenino</option>
						<option value="male">Masculino</option>
					</select>
				</div>

				<label className="label__title" htmlFor="weight">
					Peso (kg)
				</label>
				<input className="input__box" type="number" id="weight" value="0" min="0" />

				<label className="label__title" htmlFor="height">
					Altura (cm)
				</label>
				<input className="input__box" type="number" id="height" value="0" min="0" />

				<button className="btn-calculate">Calcular</button>
			</form>

			<table className="app__table">Resultado</table>
		</div>
	);
};

export default App;
