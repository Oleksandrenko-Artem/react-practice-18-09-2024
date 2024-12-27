import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {parseISO, differenceInSeconds, formatDistanceToNow} from 'date-fns';


const TimerBack = (props) => {
    const { title, dateStr } = props;
    const date = parseISO(dateStr);
    const [timeRemainder, setTimeRemainder] = useState('');
    useEffect(() => {
        const idInterval = setInterval(() => { 
            
            // 1 варіант - виводили кількість секунд що лишилися до події
            // const now = new Date();
            // const secRemainder = differenceInSeconds(date, now);
            // setTimeRemainder(secRemainder);

            // 2 варіант
            // setTimeRemainder(formatDistanceToNow(date));
        }, 1000);
        return () => {
            clearInterval(idInterval);
        };
    }, [date]);
    return (
        <div>
            <h2>Timer Back to {title}</h2>
            <h2>{dateStr}</h2>
            <h2>remainder: {timeRemainder}</h2>
        </div>
    );
};


TimerBack.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string
};


export default TimerBack;
