<template>
  <div class="person-tag">
    <h5>person id: {{ personId }}</h5>
    <h3>{{ personName }}</h3>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'


export default {
  name: 'PersonTag',
  setup() {
    const route = useRoute()
    const store = useStore()
    const personId = computed(() => route.params.id)
    const person = computed(() => store.state.persons.find( person => person.id === personId.value))
    const personName = computed(() => person.firstname + ' ' + person.lastname)
    return {
      personId,
      person,
      personName
    }
  }
}
</script>
