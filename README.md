## 概要

TypeScript学習用

## プロジェクト構成

|項目|内容|
|OS|Ubuntu|
|エディタ|Zed|
|使用言語|TypeScript|

## コマンド

### コンテナ作成
docker create -it --name ts-practice -v "$PWD":/app -w /app node:lts-trixie-slim bash

### コンテナ内に入る
docker start -ai ts-practice

###  TypeScript関連のインストール
npm install --save-dev typescript ts-node @types/node

### TypeScriptの初期化
npx tsc --init

### TypeScriptプログラムの実行
npx ts-node <ファイル名>
