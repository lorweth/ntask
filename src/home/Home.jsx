import React, { useState } from 'react';
import {
  Badge,
  Box,
  Checkbox,
  Flex,
  Heading,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

/**
 * TagEvent
 *
 * @param {number} number
 * @param {string} title
 * @param {string} status
 */
function TagEvent({ number, title, status }) {
  return (
    <Flex p={5} rounded="md" shadow="md" borderWidth="1px" flex={1}>
      <Heading fontSize="4xl">{number}</Heading>
      <Box>
        <Text>{title}</Text>
        <Text>{status}</Text>
      </Box>
    </Flex>
  );
}

/**
 * CardEvent
 *
 * @param {string} linkImage link of image
 * @param {string} title
 * @param {string} status
 * @param {date} time
 * @param {string} location
 * @param {string} linkDetail
 * @param {string} colorStatus is color of bagde (component in chakra ui) "red" | "green" | "blue" | ...
 */
function CardEvent({ linkImage, title, status, time, location, linkDetail, colorStatus }) {
  return (
    <Box
      p={3}
      rounded="md"
      shadow="md"
      borderWidth="1px"
      sx={{ display: 'flex', flex: '1', position: 'relative', gap: '.3rem' }}
    >
      <Box sx={{ maxHeight: '120px', maxWidth: '120px' }}>
        <Image
          sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
          src={linkImage}
          alt="Dan Abramov"
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Heading size="sm">{title}</Heading>
        {status && (
          <Badge variant="solid" colorScheme={colorStatus} rounded="md">
            {status}
          </Badge>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={solid('clock')} style={{ width: '1.3rem' }} />
          <Box>{time}</Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={solid('location-dot')} style={{ width: '1.3rem' }} />
          <Box>{location}</Box>
        </Box>
        {linkDetail && (
          <Box sx={{ textAlign: 'right' }}>
            <Link to={linkDetail}>Xem chi tiet</Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}

/**
 * NoteItem
 *
 * @param {string} title
 * @param {string} color is color of bagde (component in chakra ui) "red" | "green" | "blue" | ...
 * @param {date} endTime
 */
function NoteItem({ title, color, endTime }) {
  return (
    <Box p={2}>
      <Box p={2} sx={{ borderLeft: `3px solid ${color}` }}>
        <Heading size="md">{title}</Heading>
        <Text>Han chot: {endTime}</Text>
      </Box>
    </Box>
  );
}

/**
 * TableComponent
 *
 *
 */
// eslint-disable-next-line no-unused-vars
function TableComponent() {
  return (
    <TableContainer p={3} rounded="md" shadow="md" borderWidth="1px">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

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

function AppTable({ dataSource, columns }) {
  const AppRow = withColumns(columns);

  return (
    <TableContainer p={3} rounded="md" shadow="md" borderWidth="1px">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        {/* <Thead>
          {columns.map((col) => (
            <Th scope="col" key={col.key}>
              {col.title}
            </Th>
          ))}
        </Thead> */}
        <Tbody>
          {dataSource.map((data) => (
            <AppRow key={`row_${data.id}`} data={data} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function CalendarComponent({ onChange, value }) {
  return <Calendar onChange={onChange} value={value} />;
}

function ContentColumnTable() {
  return (
    <Flex gap={2} sx={{ justifyContent: 'right', width: '100%' }}>
      <FontAwesomeIcon icon={solid('paperclip')} />
      <Box>2</Box>
      <Checkbox />
      <Box>0/3</Box>
    </Flex>
  );
}

export default function Home() {
  const column = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: () => <ContentColumnTable />,
    },
    {
      title: 'action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Box sx={{ textAlign: 'right' }}>
          <Checkbox defaultChecked sx={{ borderRadius: '50%' }} />
        </Box>
      ),
    },
  ];

  const data = [
    { id: 1, title: 'abc', description: 'lorem isump', quantity: 2 },
    { id: 2, title: 'abc', description: 'lorem isump', quantity: 2 },
    { id: 3, title: 'abc', description: 'lorem isump', quantity: 2 },
    { id: 4, title: 'abc', description: 'lorem isump', quantity: 2 },
    { id: 5, title: 'abc', description: 'lorem isump', quantity: 2 },
  ];
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Heading color="green">Trang chu</Heading>
      <Box sx={{ display: 'flex', justifyContent: 'stretch', marginTop: '1rem', gap: '1rem' }}>
        <Box sx={{ flex: '1' }}>
          <Box gap="4" sx={{ display: 'flex' }}>
            <TagEvent number="1" title="Su kien" status="Sap dien ra" />
            <TagEvent number="1" title="Su kien" status="Dang dien ra" />
            <TagEvent number="1" title="Su kien" status="Da ket thuc" />
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Link to="/">Xem tat ca</Link>
          </Box>
          <Heading p={2} size="lg">
            Su kien
          </Heading>
          <Box gap="4" sx={{ display: 'flex' }}>
            <CardEvent
              title="title event"
              time="1/1/2022"
              location="where?"
              linkDetail="/"
              linkImage="https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg"
              status="Dang dien ra"
              colorStatus="green"
            />
            <CardEvent
              title="title event"
              time="1/1/2022"
              location="where?"
              linkDetail="/"
              linkImage="https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg"
              status="Dang dien ra"
              colorStatus="green"
            />
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Link to="/">Xem tat ca</Link>
          </Box>
          <Heading p={2} size="lg">
            Cong viec
          </Heading>
          <Box>
            <AppTable dataSource={data} columns={column} />
          </Box>
        </Box>
        <Box p={3} rounded="md" shadow="md" borderWidth="1px">
          <Heading size="md">Lich</Heading>
          <Box>
            <CalendarComponent onChange={onChange} value={value} />
          </Box>
          <Box>Loi nhac</Box>
          <NoteItem color="red" title="poster design" endTime="22/2/2022" />
          <NoteItem color="green" title="poster design" endTime="33/2/2022" />
          <NoteItem color="red" title="poster design" endTime="22/2/2022" />
        </Box>
      </Box>
    </div>
  );
}
