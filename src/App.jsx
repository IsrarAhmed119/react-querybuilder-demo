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
    valueEditorType: 'multiselect',
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

  const loadQuery = () => {
    setQuery({
      combinator: 'and',
      rules: [
        {
          id: 'r-0.559982682432425',
          field: 'firstName',
          operator: '=',
          valueSource: 'value',
          value: 'israr',
          disabled: true,
        },
        {
          id: 'r-0.9335270678830434',
          field: 'lastName',
          operator: '=',
          valueSource: 'value',
          value: 'ahmed',
        },
        {
          id: 'r-0.10483898855505536',
          field: 'chargeAmount',
          operator: '=',
          valueSource: 'value',
          value: '22',
        },
      ],
      id: 'g-0.15186517915036535',
      not: false,
    });
  };

  return (
    <div>
      <QueryBuilder
        fields={fields}
        query={query}
        onQueryChange={q => setQuery(q)}
        showNotToggle
        // showLockButtons
      />
      <h4>Query</h4>
      <pre>
        <code>{formatQuery(query, 'sql')}</code>
      </pre>
      <code>
        <pre>{formatQuery(query, 'json')}</pre>
      </code>
      <button onClick={loadQuery}>loadQuery</button>
    </div>
  );
};
