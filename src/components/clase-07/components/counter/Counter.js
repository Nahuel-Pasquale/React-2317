import { CounterContainerStyled, CounterSpanStyled, CounterButtonContainerStyled } from './CounterStyles';
import Reset from '../reset/Reset';
import { useSelector } from 'react-redux'
import Substract from '../substract/Substract';
import Add from '../add/Add';

const Counter = () => {
    const state = useSelector(state => state.counter)

    return (
        <CounterContainerStyled>
            <CounterButtonContainerStyled>
                <Substract/>
                <CounterSpanStyled> { state.count } </CounterSpanStyled>
                <Add/>
            </CounterButtonContainerStyled>
            
            <Reset/>
        </CounterContainerStyled>
    )
}

export default Counter