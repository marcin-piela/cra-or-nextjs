export default (req, res) => {
  res.json([
    {
      title: 'News 1',
      date: 'Nov 12',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'News 2',
      date: 'Nov 11',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ]);
};