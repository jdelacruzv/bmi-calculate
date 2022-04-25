import styles from "./RoundButton.module.css";

const RoundButton = ({ value }) => {
	if (value < 18.5) {
		return (
			<button
				className={`${styles.color} ${styles.color__hotpink}`}
			></button>
		)
	};

	if (value >= 18.5 && value <= 24.9) {
		return (
			<button
				className={`${styles.color} ${styles.color__green}`}
			></button>
		)
	};

	if (value >= 25.0 && value <= 29.9) {
		return (
			<button
				className={`${styles.color} ${styles.color__yellow}`}
			></button>
		)
	};

	if (value >= 30.0) {
		return (
			<button
				className={`${styles.color} ${styles.color__red}`}
			></button>
		)
	};
};

export default RoundButton;