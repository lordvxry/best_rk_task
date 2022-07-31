<template>
  <div class="app">
    <store-header/>
    <div class="app-content">
      <product-page/>
    </div>
    <store-footer/>
  </div>
</template>

<script>

import ProductPage from "@/pages/ProductPage";
import StoreHeader from "@/components/StoreHeader";
import StoreFooter from "@/components/StoreFooter";

export default {
  components: {StoreFooter, StoreHeader, ProductPage}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: hidden;
}

.app-content{
  margin-bottom: 50px;
}

</style>
