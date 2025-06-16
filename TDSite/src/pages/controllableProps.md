---
layout: page
title: DEMO
---

<script setup>
import { ref } from 'vue'

import ControllableProps from '../components/ControllableProps.vue'
const count = ref(0)
</script>

<div class="px-4 py-4">
<ControllableProps />
</div>