import { useState } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import './styles.css';

export const validator = r => !!r.value;

const fields = [
  { name: 'firstName', label: 'First Name', validator },
  { name: 'lastName', label: 'Last Name', validator },
  {
    name: 'payerID',
    label: 'payer ID',
    valueEditorType: 'select',
    values: [
      { name: 'PayeeID1', label: 'PayeeId 1' },
      { name: 'PayeeID2', label: 'PayeeId 2' },
      { name: 'PayeeID3', label: 'PayeeId 3' },
    ],
    validator,
  },
  { name: 'birthdate', label: 'Birth Date', inputType: 'date' },
  {
    name: 'chargeAmount',
    label: 'Charge Amount',
    inputType: 'number',
    validator,
  },
];

const initialQuery = { combinator: 'and', rules: [] };

export const App = () => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <div>
      <QueryBuilder
        fields={fields}
        query={query}
        onQueryChange={q => setQuery(q)}
      />
      <h4>Query</h4>
      <pre>
        <code>{formatQuery(query, 'sql')}</code>
      </pre>
    </div>
  );
};
