// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://你的用户名.github.io',
  base: '/你的仓库名', // 如果直接部署在根域名下，可以删除这一行
});
