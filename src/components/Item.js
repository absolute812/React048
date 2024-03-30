import React from "react";

const Item = () => {
  const riddles = [
    {
      id: 1,
      description: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      option1: "Echo",
      option2: "Tree",
      option3: "River",
      option4: "Cloud",
      correct: 1,
    },
    {
      id: 2,
      description: "The more you take, the more you leave behind. What am I?",
      option1: "Footsteps",
      option2: "Memories",
      option3: "Time",
      option4: "Money",
      correct: 1,
    },
    {
      id: 3,
      description: "What has keys but can't open locks?",
      option1: "Computer",
      option2: "Music",
      option3: "Piano",
      option4: "Map",
      correct: 3,
    },
  ];

  return (
    <div>
      {riddles.map((riddle) => (
        <div key={riddle.id}>
          <p>{riddle.description}</p>
          <p>
            <input type="radio" id={riddle.option1} name={riddle.id} value={riddle.option1} />
            <label htmlFor={riddle.option1}>{riddle.option1}</label>
          </p>
          <p>
            <input type="radio" id={riddle.option2} name={riddle.id} value={riddle.option2} />
            <label htmlFor={riddle.option2}>{riddle.option2}</label>
          </p>
          <p>
            <input type="radio" id={riddle.option3} name={riddle.id} value={riddle.option3} />
            <label htmlFor={riddle.option3}>{riddle.option3}</label>
          </p>
          <p>
            <input type="radio" id={riddle.option4} name={riddle.id} value={riddle.option4} />
            <label htmlFor={riddle.option4}>{riddle.option4}</label>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Item;