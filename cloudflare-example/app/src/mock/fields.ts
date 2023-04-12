export const leaf = [
  {
    label: 'Content Title',
    name: 'contentTitle',
    value: 'Content Title',
    type: 'text',
    // required: true,
  },

  {
    label: 'Content SubType',
    name: 'leafSubtype',
    value: '',
    type: 'select',
    options: [
      { label: 'Audio', name: 'leafSubtype', value: 'Audio', state: true },
      {
        label: 'Composition',
        name: 'leafSubtype',
        value: 'Composition',
        state: false,
      },
      { label: 'Lyrics', name: 'leafSubtype', value: 'Lyrics', state: false },
    ],
  },
  {
    label: 'Content Cover',
    name: 'cover',
    value: '',
    type: 'file',
  },
  {
    label: 'Genre',
    name: 'genre',
    value: '',
    type: 'select',
    options: [
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

  //bacause multiple language can be used
  // {
  //   label: 'Content  Language',
  //   name: 'content_language',
  //   value: 'english',
  //   type: 'select',
  //   required: true,
  //   options: [
  //     { label: 'English', name: 'english', value: 'english' },
  //     { label: 'Nepali', name: 'nepali', value: 'nepali' },
  //     { label: 'Chinese', name: 'chinese', value: 'chinese' },
  //   ],
  // },

  {
    label: 'Content Visiblility',
    name: 'contentVisibility',
    // value: '',
    type: 'select',
    options: [
      { label: 'Public', name: 'contentVisibility', value: false },
      { label: 'Private', name: 'contentVisibility', value: true },
    ],
  },
  {
    label: 'Content Rating',
    name: 'contentRating',
    value: 'G',
    type: 'select',
    options: [
      { label: 'G Rated', name: 'contentRating', value: 'G' },
      { label: 'PG Rated', name: 'contentRating', value: 'PG' },
      { label: 'PG-13 rated', name: 'contentRating', value: 'PG-13' },
      { label: 'R rated', name: 'contentRating', value: 'R' },
    ],
  },
  {
    label: 'Assign Moderators',
    name: 'contentRating',
    value: 'G',
    type: 'select',
    options: [
      { label: 'Ganesh', name: 'contentRating', value: 'G' },
      { label: 'Saken', name: 'contentRating', value: 'PG' },
    ],
  },
  {
    label: 'Max. Number of Lines',
    name: 'maxNoOfLines',
    // value: 0,
    type: 'number',
  },
  {
    label: 'Tags',
    name: 'contentTitle',
    value: 'Content Title',
    type: 'tag',
    options: [
      { label: 'song', name: 'contentRating', value: 'G' },
      { label: 'story', name: 'contentRating', value: 'PG' },
    ],
  },
  {
    label: 'Story',
    name: 'storyBehind',
    value: '',
    type: 'text',
  },
];
