const tableData = [
  {
    id: 1,
    desc: 'Quảng bá sự kiện',
    content: { link: 2, completedJob: 0, totalJob: 3 },
    checked: false,
  },
  {
    id: 2,
    desc: 'Tạo nội dung quảng bá',
    content: { link: 0, completedJob: 0, totalJob: 0 },
    checked: true,
  },
];

const tagData = [
  { id: 1, number: 1, title: 'Sự kiện', status: 'Đang diễn ra' },
  { id: 2, number: 1, title: 'Sự kiện', status: 'Đang diễn ra' },
  { id: 3, number: 1, title: 'Sự kiện', status: 'Đang diễn ra' },
];

const cardData = [
  {
    title: 'Ngày nhà giáo Việt Nam 20/11',
    linkImage:
      'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg',
    status: 'Đang diễn ra',
    time: '20/11/2020',
    location: 'UIT',
    linkDetail: '#',
  },
  {
    title: 'Sự kiện 2',
    linkImage:
      'https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg',
    status: 'Sắp diễn ra',
    time: '17/3/2020',
    location: 'UIT',
    linkDetail: '#',
  },
];

export default { tableData, tagData, cardData };
