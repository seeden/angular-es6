import webpack from 'webpack';
import { production } from './config';

webpack(production, (err, stats) => {
  if (err) {
    throw err;
  }

  console.log(stats.toString({ // eslint-disable-line
    colors: true,
  }));
});
