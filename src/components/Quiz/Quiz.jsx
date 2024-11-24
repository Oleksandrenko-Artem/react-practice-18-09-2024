import { useState } from 'react';

const namesBibl = ['React', 'Vue', 'Angular', 'Express', 'Bootstrap'];
const languages = [
    "JavaScript",
    "Python",
    "HTML",
    "C++",
    "C#",
    "PHP",
    "CSS",
    "TypeScript"
];
const namesLanguages = ['HTML', 'CSS', 'JavaScript'];

const correctAnswers = {
    answ1: 'React',
    answ2: ['CSS', 'JavaScript'],
    answ3: 'CSS',
    answ4: 'HTML'
}

const Quiz = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState([]);
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [score, setScore] = useState(null);
    const changeAnswer1 = (event) => { setAnswer1(event.target.value) }
    const showRadio = (item) => (<label key={item}><input type='radio' name='question1' value={item} checked={item === answer1} onChange={changeAnswer1} />{item}</label>)
    const changeAnswer2 = (event) => {
        const value = event.target.value;
        const newArray = answer2.includes(value) ? answer2.filter((v) => v!==value):[...answer2, value];
        setAnswer2(newArray);
    }
    const showCheckbox = (item) => (<label key={item}><input type="checkbox" value={item} checked={answer2.includes(item)} onChange={changeAnswer2} />{item}</label>)
    const showOption = (item) => <option key={item} value={item}>{item}</option>
    const changeAnswer3 = (event) => { setAnswer3(event.target.value) }
    const showRadio2 = (item) => (<label key={item}><input type='radio' name='question4' value={item} checked={item === answer4} onChange={changeAnswer4} />{item}</label>)
    const changeAnswer4 = (event) => { setAnswer4(event.target.value) }
    const checkResult = () => {
        let result = 0;
        if (answer1 === correctAnswers.answ1) {
            result++;
        }
        if (answer3 === correctAnswers.answ3) {
            result++;
        }
        if (answer4 === correctAnswers.answ4) {
            result++;
        }
        if (answer2.length === correctAnswers.answ2.length && answer2.every((item)=>correctAnswers.answ2.includes(item))) {
            result++;
        }
        setScore(result)
    }
    return (
        <div>
            <fieldset>
                <legend>1. Яка бібліотека використовується для створення інтерфейсів?</legend>
                {
                    namesBibl.map(showRadio)
                }
            </fieldset>
            <fieldset>
                <legend>Якими мовами можна змінити стилі елементів веб-сторінок?</legend>
                {
                    languages.map(showCheckbox)
                }
            </fieldset>
            <fieldset>
                <legend>Яка мова використовується для опису стилів?</legend>
                <select value={answer3} onChange={changeAnswer3}>
                    {
                        languages.map(showOption)
                    }
                </select>
            </fieldset>
            <fieldset>
                <legend>Яка мова використовується для створення веб-сторінок?</legend>
                {
                    namesLanguages.map(showRadio2)
                }
            </fieldset>
            <button onClick={checkResult}>Підрахувати результат</button>
            {score != null && <p>Правильних відповідей: {score}/4</p>}
        </div>
    );
}

export default Quiz;
