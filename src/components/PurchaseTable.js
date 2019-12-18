import React from 'react';
import { Table } from 'reactstrap';

const customers = [
  { name: 'Sammy', item: 'phone', cost: 400, sex: 'M', member: true },
  { name: 'Sara', item: 'charger', cost: 20, sex: 'F', member: false },
  { name: 'Ron', item: 'headphones', cost: 115, sex: 'M', member: true },
  { name: 'Michael', item: 'table', cost: 75, sex: 'M', member: true },
  { name: 'Dawn', item: 'tablet', cost: 230, sex: 'F', member: true },
  { name: 'Lisa', item: 'backpack', cost: 95, sex: 'F', member: false },
  { name: 'Matt', item: 'case', cost: 25, sex: 'M', member: true },
  { name: 'Derek', item: 'batteries', cost: 40, sex: 'M', member: true },
  {
    name: 'Erica',
    item: 'screen protector',
    cost: 72,
    sex: 'F',
    member: true
  }
];

// Function used to calculate customer points: A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction

// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

function Points(cost, name) {
  let reward;
  if (cost > 50 && cost <= 100) {
    reward = cost * 1 - 50;
    return (
      name +
      ' has earned ' +
      reward +
      ' points in rewards this period for total purchase of $' +
      cost +
      '.'
    );
  } else if (cost > 100) {
    reward = (cost - 100) * 2 + 50;
    return (
      name +
      ' has earned ' +
      reward +
      ' points in rewards this period for total purchase of $' +
      cost +
      '.'
    );
  } else {
    return 'You do not qualify for reward points, ' + name + '!';
  }
}

const PurchaseTable = () => {
  // formatted results to specs
  const customerResults = customers => {
    return [...customers].map(data => {
      data.sex = data.sex === 'M' ? 'M' : 'F';
      data.member = data.member === true ? 'Yes' : 'No';
      data.points = Points(data.cost, data.name);

      return data;
    });
  };

  const formattedResults = customerResults(customers);

  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Item</th>
          <th>Cost</th>
          <th>Gender</th>
          <th>Member</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {formattedResults.map((data, index) => (
          <tr key={`{data.id}-${index}`}>
            <th scope="row">{index + 1}</th>
            <td>{data.name}</td>
            <td>{data.item}</td>
            <td>{data.cost}</td>
            <td>{data.sex}</td>
            <td>{data.member}</td>
            <td>{data.points}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PurchaseTable;
