<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(person, index) in persons" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Person } from "@/types";

export default defineComponent({
  name: "WithPropType",
  components: {},
  props: {
    title: {
      type: String,
      default: "title",
    },
    persons: {
      type: Array as PropType<Person[]>,
    },
  },
  setup() {
    return {};
  },
});
</script>
