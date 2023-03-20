import React, { Component } from 'react';
import Counter from './counter';
import styled from 'styled-components';

function Counters(props) { 
        return (
            <Container>
                <div className="body">
                        {props.counters.map (counter => 
                        <Counter
                            key={counter.id}
                            id={counter.id}
                            counter={counter}
                            onDelete={props.onDelete}
                            onIncrement={props.onIncrement}
                            onDecrement={props.onDecrement}
                        />)
                        }   
                </div>
            </Container>
        );
}
 
const Container = styled.div`
.body{
    display: flexbox;
    gap: 2rem;

}
`;

export default Counters;