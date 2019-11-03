export default (req, res) => {
  res.json([
    {
      title: 'Free',
      price: '0',
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
    {
      title: 'Free 2',
      price: '0',
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro 2',
      subheader: 'Most popular',
      price: '15',
      description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise 2',
      price: '30',
      description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ]);
};