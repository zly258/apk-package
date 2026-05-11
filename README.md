# apk-package

用于集中存放和构建临时 APK 打包项目。

## 当前项目

- `apps/chinese-chess`：移动端中国象棋，React + Capacitor Android。

## 构建方式

GitHub Actions 会在提交后自动构建 APK，并将安装包上传为 workflow artifact。

后续其他需要打包的项目，可以继续按以下结构添加：

```text
apps/<project-name>/
.github/workflows/<project-name>-apk.yml
```
