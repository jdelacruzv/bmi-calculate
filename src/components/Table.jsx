import styles from "./Table.module.css";

// https://www.cdc.gov/healthyweight/spanish/assessing/bmi/adult_bmi/metric_bmi_calculator/bmi_calculator.html

const BMI = [
	{
		id: 0,
		color: "hotpink",
		category: "Bajo peso",
		bmi: "< 18.5",
	},
	{
		id: 1,
		color: "green",
		category: "Peso saludable",
		bmi: "18.5 - 24.9",
	},
	{
		id: 2,
		color: "yellow",
		category: "Exceso de peso",
		bmi: "25 - 29.9",
	},
	{
		id: 3,
		color: "red",
		category: "Obesidad",
		bmi: "30 a más",
	},
];

const Table = () => {
	return (
		<table className={styles.app__table}>
			<thead>
				<tr>
					<th>Color</th>
					<th>Categoria</th>
					<th>BMI</th>
				</tr>
			</thead>
			<tbody>
				{BMI.map(({ id, color, category, bmi }) => (
					<tr key={id}>
						<td style={{backgroundColor: `${color}`}}></td>
						<td>{category}</td>
						<td>{bmi}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
