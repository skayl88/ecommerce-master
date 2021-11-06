<template>
  <div :class="$style.footer">
    <div :class="$style.content">
      <h1>logo</h1>

      <p>Адрес: Санкт-Петербург</p>
      <p>Телефон: +7 811-188-888</p>
      <p>Почта: info@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.content {
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1170px;
  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
  position: relative;
  padding: 0 25px;
  box-sizing: border-box;
}

p {
  margin: 20px;
  font-size: 16px;
  color: #636363;
  line-height: 36px;
  display: block;
}
.footer {
  background: $basic-color;
  width: 100%;
}
</style>
