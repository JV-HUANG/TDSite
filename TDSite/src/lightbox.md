---
layout: page
hello: world
title: LIGHTBOX PAGE
---

<script setup>
import { ref } from 'vue'

import LIGHTBOX from './components/lightbox.vue'
const count = ref(0)
</script>

# LIGHTBOX PAGE

<LIGHTBOX />

<center>
<v-btn prepend-icon="mdi-keyboard-backspace" href="/" variant="tonal">
  返回首页
</v-btn>
</center>