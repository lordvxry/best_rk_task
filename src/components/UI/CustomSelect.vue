<template>
  <select @change="changeOptions"
          class="customSelect">
    <option selected
            disabled
            value="">
      Sort
    </option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped>
.customSelect {
  border: 2px solid teal;
  border-radius: 4px;
}

</style>