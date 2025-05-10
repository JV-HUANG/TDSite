---
layout: page
title: MEDIA
---

<script setup>
import { ref } from 'vue'

import VIDEO from './components/video.vue'
import AUDIO from './components/audio.vue'
const count = ref(0)
</script>

## MEDIA示例
<div class="px-4 py-4">
<AUDIO />
<VIDEO />
</div>