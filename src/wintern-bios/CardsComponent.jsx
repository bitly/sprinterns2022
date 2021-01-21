import React from 'react';

    const CardsComponent = ({ bioToShow, color = 'red' }) => {
     const { useState } = React;

    const [showStateEx, setShowStateEx] = useState(false);

    const randomNum = Math.random();

    return (
        <>
            <div className='bio-cards'>
                <div className="row">
                    <div className="column">
                        <div className="card card-1">
                            <div className="card-body">
                                <h3 className="card-title"> Meet The Team </h3>
                                <p className="card-text"> Meet our hard working team and get to know more about each team member.</p>
                                <p> <button className="btn btn-primary1"> View </button> </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card card-2">
                            <div className="card-body">
                                <h3 className="card-title"> What is an API?</h3>
                                <p className="card-text"> API stands for Application Programming Interface which is a software that allows for two applications to communicate with each other.</p>
                                <p> <button className="btn btn-primary2"> Learn More </button> </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card card-3">
                            <div className="card-body">
                                <h3 className="card-title"> Any Questions?</h3>
                                <div className="comments">
                                    <form action="/action_page.php">
                                        <p> </p>
                                        <label for="name"> Name </label>
                                        <input type="text" id="name" name="name" placeholder="Your name.."></input>

                                        <label for="quest">Question</label>
                                        <input type="text" id="quest" name="question" placeholder="Your question.."></input>

                                        <input type="submit" value="Submit"></input>
                                    </form>
                                </div>
                                <p className="card-text"> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsComponent;

      