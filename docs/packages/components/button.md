# 按钮 Button

<br/>

*按钮用于开始一个即时操作*

## 基本使用

*六种类型*

<br/>

<div>
  <ms-button type="primary" @click="console.log('Hello')">Hello</ms-button>
</div>

::: details Show Code

```vue
<template>
  <div>
    <!-- <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button> -->
  </div>
</template>
```

:::

## Events

事件名称 | 说明 | 参数
-- | -- | --
click | 点击按钮时的回调，未设置 `route` 时生效 | (e: Event) => void
