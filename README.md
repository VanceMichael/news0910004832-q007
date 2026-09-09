# 通知发布流程

项目为内部通知提供起草、复核、预约生效和撤回的流程记录。每个版本的状态时间线写入 SQLite，定时任务负责处理到期预约。

## 目录约定

- `src/http/` 提供 JSON HTTP 接口。
- `src/workflow/` 保存状态转移和版本关联。
- `src/persistence/` 负责 SQLite 操作。
- `test/` 存放时钟替身与流程测试。

操作者信息来自请求上下文，所有时间使用 UTC。项目不依赖外部消息或页面服务。执行 `npm install` 后可用 `npm test` 检查工程，并以 `npm start` 启动服务。
