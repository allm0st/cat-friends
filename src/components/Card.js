import React from 'react';

const Card = ({ id, name, email }) => (
  <div className="bg-light-green dib br3 pa3 ma2 grow tc">
    <img alt={`User: ${name}`} src={`https://robohash.org/${id}?set=set4`} height="200" width="200" />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
