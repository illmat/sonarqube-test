<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(person, index) in persons" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Person } from "@/types";

export default defineComponent({
  name: "WithoutPropType",
  components: {},
  props: {
    title: {
      type: String,
      default: "title",
    },
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
