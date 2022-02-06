## 保证代码格式一致

1. husky [自动引入 ](https://typicode.github.io/husky/#/?id=automatic-recommended)，指定了 git 的 pre-commit hook 对应的脚本文件即 .husky => pre-commit，会执行相应的

   npm script 命令<br />

```bash
npx husky-init && npm install
```

2. prettier pretty-quick

```bash
npm install --save-dev prettier pretty-quick
```

3. 改写 .husky => pre-commit

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install pretty-quick --staged
```

4. 添加 npm script

```bash
// package.json
{
  "scripts": {
    "prettier": "prettier -c --write **/*",
    "pretty-quick": "pretty-quick"
  }
}
```

这样在每次提交 git commit 时便会根据 prettier 格式化相应的文件
