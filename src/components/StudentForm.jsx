import { useState } from 'react';
import styles from './StudentForm.module.css';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // TODO 5: build a student object, call onAdd, then clear the fields
    const newStudent = {
      name,
      course,
      yearLevel: Number(yearLevel),
      status,
      gwa: Number(gwa),
    };

    onAdd(newStudent);

    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Course (e.g. BSCS)"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <input
        className={styles.input}
        type="number"
        placeholder="Year Level"
        min="1"
        max="4"
        value={yearLevel}
        onChange={(e) => setYearLevel(e.target.value)}
        required
      />

      <select
        className={styles.input}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Regular">Regular</option>
        <option value="Irregular">Irregular</option>
        <option value="On Probation">On Probation</option>
      </select>

      <input
        className={styles.input}
        type="number"
        step="0.01"
        placeholder="GWA"
        value={gwa}
        onChange={(e) => setGwa(e.target.value)}
        required
      />

      <button type="submit">Add Student</button>
    </form>
  );
}