const lists = ['Sap dien ra', 'Dang dien ra', 'Da dien ra'];

const bagde = [
  {
    color: 'red',
    content: 'MOM',
  },
  {
    color: 'red',
    content: 'Tinh nguyen 1',
  },
  {
    color: 'cyan',
    content: 'MHX',
  },
];

const avatar = [
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Segun Adebayo 1',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Segun Adebayo 2',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Segun Adebayo 3',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Segun Adebayo 4',
    url: 'https://bit.ly/sage-adebayo',
  },
];

const data = {
  'Sap dien ra': [
    {
      id: 'item-1',
      prefix: 'Sap dien ra',
      data: {
        title: 'Lễ Tốt Nghiệp',
        time: '05:38-17/03/2022',
        location: 'UIT',
        badge: [
          {
            color: 'pink',
            content: 'Love',
          },
          {
            color: 'green',
            content: 'school',
          },
        ],
        avatar,
        imgUrl:
          'https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/310375347_1750717548630126_3814011300450815473_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6oCg0dr-CQoAX_b6EjR&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8LGBt4JG5_bvxGMWrekrX_T10ajDs0v43R6Z3FqvxVgg&oe=634238D2',
      },
    },
    {
      id: 'item-17',
      prefix: 'Sap dien ra',
      data: {
        title: 'su kien 1',
        time: '05:38-17/03/2022',
        location: 'UIT',
        bagde,
        avatar,
        imgUrl: 'https://wallpaperaccess.com/full/32054.jpg',
      },
    },
  ],
  'Dang dien ra': [
    {
      id: 'item-2',
      prefix: 'Dang dien ra',
      data: {
        title: 'su kien 1',
        time: '05:38-17/03/2022',
        location: 'UIT',
        bagde,
        avatar,
        imgUrl: 'https://wallpaperaccess.com/full/32054.jpg',
      },
    },
  ],
  'Da dien ra': [
    {
      id: 'item-5',
      prefix: 'Da dien ra',
      data: {
        title: 'su kien 1',
        time: '05:38-17/03/2022',
        location: 'UIT',
        bagde,
        avatar,
        imgUrl: 'https://wallpaperaccess.com/full/32054.jpg',
      },
    },
  ],
};

export { lists, data };
