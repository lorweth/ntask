import React from 'react';
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export function withColumns(cols) {
  // eslint-disable-next-line func-names
  return function ({ data }) {
    // eslint-disable-next-line no-console
    return (
      <Tr>
        {cols.map((col) => (
          <Td key={`${col.key}_${data.id}`}>
            {col.render ? col.render(data) : data[col.dataIndex]}
          </Td>
        ))}
      </Tr>
    );
  };
}

export default function AppTable({ dataSource, columns, caption, hasHeader }) {
  const AppRow = React.useMemo(() => withColumns(columns), [columns]);

  return (
    <TableContainer p={3} rounded="md" shadow="md" borderWidth="1px">
      <Table variant="simple">
        {caption && <TableCaption>{caption}</TableCaption>}
        {hasHeader && (
          <Thead>
            {columns.map((col) => (
              <Th scope="col" key={col.key}>
                {col.title}
              </Th>
            ))}
          </Thead>
        )}
        <Tbody>
          {dataSource.map((data) => (
            <AppRow key={`row_${data.id}`} data={data} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
