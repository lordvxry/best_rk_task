<template>
  <div class="productItem-container">
    <div class="productItem-imgContainer">
      <img class="productItem-img" :src="product.image"/>
    </div>
    <div class="productItem-content">
      <div class="productItem-content-title">{{ product.title }}</div>
      <div>Price:
        <span class="productItem-content-text">{{ product.price }}$</span>
      </div>
      <div>Rating:
        <span class="productItem-content-text">{{ product.rate }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.productItem-container {
  width: 300px;
  height: 350px;
  padding: 10px;
  border: rgba(128, 128, 128, 0.2) 1px solid;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  flex-direction: column;
}

.productItem-imgContainer {
  width: 200px;
  min-height: 200px;
  align-self: center;
}

.productItem-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.productItem-content {
  padding-top: 10px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;

}

.productItem-content-title {
  height: 100%;
  align-self: center;
  top: 0;
  font-size: 15px;
  font-weight: bold;
}

.productItem-content-text {
  color: #9b0031;
}

</style>