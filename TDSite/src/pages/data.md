---
layout: page
hello: world
title: DATA PAGE
---

<script setup>
import { ref } from 'vue'

import DATA from './data.vue'
const count = ref(0)
</script>

<DATA />
