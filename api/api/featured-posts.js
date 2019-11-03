 export default (req, res) => {
  res.json([
    {
      title: 'Featured post',
      date: 'Nov 12',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ]);
};