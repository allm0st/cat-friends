import React from 'react';
import Card from './Card';

const CardList = ({ users }) =>
  users.map(user => <Card key={user.id} {...user} />);

export default CardList;