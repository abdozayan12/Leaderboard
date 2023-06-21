import './style.css';
import { createScore, getScore } from './modules/api.js';
import Board from './modules/Board.js';

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const student = document.getElementById('student');
    const score = document.getElementById('score');
  
    createScore(student.value, score.value);
    student.value = '';
    score.value = '';
  });
  
  const students = new Board();
  const print = () => {
    const result = getScore();
    result.then((res) => {
        students.data = res.result;
      const studentsScores = document.querySelector('.scores-list');
  
      // sorted the array descending order
      const sortedScores = students.data.sort((a, b) => b.score - a.score);
  
      studentsScores.innerHTML = sortedScores.map((student) => `<tr><td>${student.user}: ${student.score}</td></tr>`).join('');
    });
  };
  
  const refreshButton = document.getElementById('refBtn');
  
  refreshButton.addEventListener('click', () => {
    print();
  });
  
  window.onload = print();