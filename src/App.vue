<template>
  <div id="app">
    <WithPropType title="WithPropType" :persons="persons" />
    <WithoutPropType title="WithoutPropType" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import WithPropType from "@/components/WithPropType.vue";
import WithoutPropType from "@/components/WithoutPropType.vue";
import { Person } from "@/types";

export default defineComponent({
  name: "App",
  components: {
    WithPropType,
    WithoutPropType,
  },
  setup() {
    const persons = ref<Person[]>([
      {
        name: "Jessica",
        age: 20,
      },
      {
        name: "George",
        age: 23,
      },
    ]);

    return {
      persons,
    };
  },
});
</script>
