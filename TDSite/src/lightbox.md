---
layout: home
hello: world
title: LIGHTBOX PAGE
---

<script setup>
import { ref } from 'vue'

import LIGHTBOX from './components/lightbox.vue'
const count = ref(0)
</script>

<LIGHTBOX />

<center>
<v-btn prepend-icon="mdi-keyboard-backspace" href="/" variant="plain">
  BACK HOME
</v-btn>
</center>