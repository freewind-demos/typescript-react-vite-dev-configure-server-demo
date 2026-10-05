# configureServer Demo

演示 Vite 插件的 `configureServer` 钩子：在 dev server 上插入中间件，让页面和 API 共用一个端口。

## 运行

```bash
pnpm install
pnpm run dev
```

打开 http://localhost:52306 ，输入名字点「打招呼」，下方显示 `hello, $name`。

## 结构

- `vite.config.ts` — dev server 配置，挂上 `devApiPlugin()`。
- `src/server/devApiPlugin.ts` — 在 `configureServer` 里把 Express app 插进 `server.middlewares`，`/api/` 交给它，其余放行给 Vite。
- `src/server/api/hello.ts` — API 本体。
- `src/web/` — 页面。

## 后台代码改动会生效

API 代码是 dev server 的一部分：改 `src/server/` 下的文件，Vite 会重启 dev server，改动立刻生效，浏览器刷新即可看到新结果，不用手动重启 `pnpm run dev`。
