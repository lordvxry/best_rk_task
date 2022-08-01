<template>
  <div class="productPage-container">
    <div class="productPage-searchPanel">
      <custom-search placeholder="Search..."
                     :model-value="searchQuery"
                     @update:model-value="setSearchQuery"
      />
      <custom-select model-value="selectedSort"
                     :options="sortOptions"
                     @update:model-value="setSelectedSort"
      />
    </div>
    <div class="productPage-content"
         v-if="!isFetching"
    >
      <product-list :products="searchProducts"/>
    </div>
    <div v-else
         class="loader"
    />
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState, mapGetters} from "vuex";
import ProductList from "@/components/ProductList";

export default {
  components: {ProductList},
  methods: {
    ...mapMutations({
      setProducts: "store/setProducts",
      setFetching: "store/setFetching",
      setSearchQuery: "store/setSearchQuery",
      setSelectedSort: "store/setSelectedSort",
    }),
    ...mapActions({
      fetchProducts: "store/fetchProducts",
    }),
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapState({
      products: state => state.store.products,
      isFetching: state => state.store.isFetching,
      searchQuery: state => state.store.searchQuery,
      selectedSort: state => state.store.selectedSort,
      sortOptions: state => state.store.sortOptions,
    }),
    ...mapGetters({
      sortedProducts: "store/sortedProducts",
      searchProducts: "store/searchProducts",
    })
  }
}
</script>

<style scoped>
.productPage-container {
  padding: 20px 40px;
  max-height: 80vh;
}

.productPage-searchPanel {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}

.productPage-content {
  overflow-y: auto;
  max-height: 80vh;
}

.loader {
  margin: 30vh auto;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 4px dashed #000;
  animation-name: isLoading-spinner;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}

@keyframes isLoading-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>