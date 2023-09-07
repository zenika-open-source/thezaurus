import {test} from 'node:test';
import assert from 'node:assert';
import {apiTalksToDTO} from '../components/elements/Talks/Talks.utils.js';

test('talks are mapped to expected objects', () => {
  const talks = [
    [
      'TZ Lyon',
      '28/04/2023',
      'video',
      'Comment gérer des journées de 35h ?',
      'https://www.youtube.com/watch?v=GTFFqzAvZlg',
      'Sylvain Gougouzian',
      'Alien',
    ],
    [
      'TZ Lyon',
      '28/04/2023',
      'video',
      'STOP à l’espionnage ! Comment disparaître d’internet ? 🕵🏼‍♂️',
      'https://youtu.be/Tj1yPUsA720',
      'Etienne Idoux, Mickaël Alves',
      'Alien',
    ],
  ];
  const mappedTalks = apiTalksToDTO(talks);
  assert.deepEqual(mappedTalks.talks, [
    {
      event: 'TZ Lyon',
      date: '28/04/2023',
      format: ['video'],
      title: 'Comment gérer des journées de 35h ?',
      link: 'https://www.youtube.com/watch?v=GTFFqzAvZlg',
      author: ['Sylvain Gougouzian'],
      ressource: ['Alien'],
    },
    {
      event: 'TZ Lyon',
      date: '28/04/2023',
      format: ['video'],
      title: 'STOP à l’espionnage ! Comment disparaître d’internet ? 🕵🏼‍♂️',
      link: 'https://youtu.be/Tj1yPUsA720',
      author: ['Etienne Idoux', 'Mickaël Alves'],
      ressource: ['Alien'],
    },
  ]);
});
