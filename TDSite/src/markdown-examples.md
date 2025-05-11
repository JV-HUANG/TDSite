# Markdown 扩展示例

本页展示了 VitePress 提供的一些内置 Markdown 扩展。

## 语法高亮

VitePress 使用 shiki [Shiki](https://github.com/shikijs/shiki) 提供语法高亮功能,并支持额外的特性，如代码行高亮。
:

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 定制容器/自定义容器

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示/小贴士。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个细节块/详细信息块。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示/小贴士。
:::

::: warning
这是一个危险的警告。
:::

::: danger
This is a dangerous warning.
:::

::: details
这是一个细节块/详细信息块。
:::

## 更多

查看的文档 [Markdown 扩展的完整列表](https://vitepress.dev/guide/markdown).
