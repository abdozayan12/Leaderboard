import './style.css';
import students from './modules/students.js';

const studentsScores = document.querySelector('.scores-list');

studentsScores.innerHTML = students.map((student) => `<tr><td>${student.name}: ${student.score}</td></tr>`).join('');