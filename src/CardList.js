import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
      {/* <Card robot={{ name: "", email: "" }} /> */}
    </div>
  );
};

export default CardList;
