import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    fallback: {
      fs: false, // fs 모듈을 사용하지 않는다면 false로 설정
      path: require.resolve("path-browserify"), // path 모듈의 polyfill 추가
      // 필요한 다른 polyfill 추가
    }
  },
};