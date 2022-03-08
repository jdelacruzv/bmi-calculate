import styles from "./Table.module.css";

const bmi = [
	{ id: 0, color: "hotpink", detail: "Bajo peso", female: "< 20", male: "< 20" },
	{ id: 1, color: "blue", detail: "Normal", female: "20 - 23.9", male: "20 - 24.9" },
	{ id: 2, color: "yellow", detail: "Sobrepeso", female: "24 - 28.9", male: "25 - 29.9" },
	{ id: 3, color: "orange", detail: "Obesidad", female: "29 - 37", male: "30 - 40" },
	{ id: 4, color: "red", detail: "Alto riesgo", female: "> 37", male: "> 40" }
];

const Table = () => {
	return (
		<table className={styles.app__table}>
			<thead>
				<tr>
					<th>Color</th>
					<th>Detalle</th>
					<th>Mujer</th>
					<th>Hombre</th>
				</tr>
			</thead>
			<tbody>
				{bmi.map(({ id, color, detail, female, male }) => (
					<tr key={id}>
						<td style={{ backgroundColor: `${color}` }}></td>
						<td>{detail}</td>
						<td>{female}</td>
						<td>{male}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;