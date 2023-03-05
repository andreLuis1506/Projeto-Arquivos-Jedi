<script setup lang="ts">
import PeopleApi from '@/services/People'
import {onMounted} from "vue";

import {ref} from "vue";

const teste = ref({})

onMounted(async () =>{
  teste.value = await PeopleApi.get(1)
})

</script>

<template>
  <main>
  <div>
    {{teste}}
  </div>
  </main>
</template>
