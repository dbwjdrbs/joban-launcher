import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

// 이미지 파일 처리
rules.push({
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      },
    },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.png'],
    fallback: {
      fs: false, // fs 모듈을 사용하지 않는다면 false로 설정
      path: require.resolve("path-browserify"), // path 모듈의 polyfill 추가
      // 필요한 다른 polyfill 추가
    },
  },
};
