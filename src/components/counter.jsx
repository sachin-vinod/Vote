import React, { Component } from 'react';
import Image from '../assets/login.jpg';
import styled from 'styled-components';

function Counter({id,counter,onIncrement}) {
    // const fromateCount = () => {
    //     const {value} = counter;
    //     if(value<0){
    //         props.counter.value=0;
    //         return "Zero";
    //     }
    //     return value === 0 ? "Zero" : value;
    //  };

     const handleVote = ()=> {
        onIncrement(counter);
        console.log(id);
     };

        return (
            <Container>
                {/* <span className="badge badge-warning m-2">{this.props.counter.id}</span>
                <span className="badge badge-primary">{this.fromateCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
                >
                    +
                </button>
                <button onClick={() =>  this.props.onDecrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
                >
                    -
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button> */}
                <div className="card" >
                    <img className="card-img-top" src={Image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="buttons">
                            <button onClick={handleVote} className="btn btn-primary">Vote</button>
                            <a href={"#"} className="btn btn-danger">More info</a>
                        </div>
                    </div>
                </div>
            </Container>
        );
}
 
const Container = styled.div`
.card{
    width: 18rem;
    background-color: #F0F8FF;    
    .card-img-top{
        width: 16rem;
        hight: 10rem;
        padding-left: 2rem;
        padding-top: 1rem;
    }
    .buttons{
        display: flex;
        gap: 3rem;
    }
    border-radius: 0.5rem;
    border: none;
}
`; 

export default Counter;