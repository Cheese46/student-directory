import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isOnProbation = student.status === 'On Probation';
  const isDeansLister = student.gwa <= 1.75;

  const cardClassName = isOnProbation
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClassName}>
      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
      <p>Year Level: {student.yearLevel}</p>
      <p>Status: {isOnProbation ? 'On Probation' : student.status}</p>
      <p>GWA: {student.gwa}</p>
      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
    </div>
  );
}