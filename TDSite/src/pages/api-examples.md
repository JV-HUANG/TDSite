---
outline: deep
---

# 运行时 API 示例

本页面演示了 VitePress 提供的一些运行时 API 的用法。

The main `useData()` API可用于访问当前页面的站点、主题和页面数据。它在以下两种情况下均有效`.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 成效

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前置内容
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 成效

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前导内容
<pre>{{ frontmatter }}</pre>

## 更多

查看的文档中提供了 [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
