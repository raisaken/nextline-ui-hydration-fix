export const filter_leaf = [
  {
    filterLabel: 'Leaf Type',
    name: 'leaftype',
    value: '',
    type: 'select',
    options: [
      { label: 'All', name: 'leaftype', value: '', state: true },
      { label: 'Art', name: 'leaftype', value: 'Art', state: false },
      {
        label: 'Song',
        name: 'leaftype',
        value: 'Song',
        state: false,
      },
      { label: 'Story', name: 'leaftype', value: 'Story', state: false },
    ],
  },

  {
    filterLabel: 'Genre',
    name: 'genre',
    value: '',
    type: 'select',
    options: [
      { label: 'All', name: 'genre', value: '' },
      { label: 'Classical', name: 'genre', value: 'Classical' },
      { label: 'Country', name: 'genre', value: 'Country' },
      { label: 'Funk', name: 'genre', value: 'Funk' },
      { label: 'HipHop', name: 'genre', value: 'HipHop' },
      { label: 'Metal', name: 'genre', value: 'Metal' },
      { label: 'Retro', name: 'genre', value: 'Retro' },
      { label: 'Rock', name: 'genre', value: 'Rock' },
      { label: 'Romantic', name: 'genre', value: 'Romantic' },
      { label: 'Suspence', name: 'genre', value: 'Suspence' },
      { label: 'Thriller', name: 'genre', value: 'Thriller' },
      { label: 'Other', name: 'genre', value: 'Other' },
    ],
  },
];
