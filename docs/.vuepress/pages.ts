export default [
  {
    text: 'About',
    icon: 'lightbulb',
    prefix: '/about/',
    children: ['intro', 'background', 'roadmap'],
  },
  {
    text: 'A.I. Inference',
    icon: 'robot',
    prefix: '/a.i./',
    children: ['start', 'llama', 'diffusion'],
  },
  {
    text: 'Nodes',
    icon: 'server',
    prefix: '/nodes/',
    children: ['testgrid', 'testgrid-windows', 'testgrid-ubuntu'],
  },
  {
    text: 'Protocols',
    icon: 'link',
    prefix: '/protocols/',
    children: ['start', 'staking', 'rewards', 'pools', 'jobs', 'nodes', 'token'],
  },
];
