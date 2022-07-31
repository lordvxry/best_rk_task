<template>
  <div class="productList-container">
      <product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="productList-content"
      />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  components: {ProductItem},
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {}
}
</script>

<style scoped>
.productList-container {
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.productList-content{
  min-width: 300px;
}

</style>