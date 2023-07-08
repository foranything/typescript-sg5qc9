// Import stylesheets
import './style.css';
import { data } from './const';

const randomElement = data[Math.floor(Math.random() * data.length)];

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${randomElement}</h1>`;
