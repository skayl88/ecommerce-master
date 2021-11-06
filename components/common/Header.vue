<template>
  <div :class="$style.header">
    <div :class="$style.row_first">
      <div :class="$style.container">
        <div :class="$style.adress">
          <p>info@gmail.com</p>
          <p>+7 811-188-888</p>
        </div>
        <div :class="$style.work_time">
          <p>Время работы</p>
          <p>8:00 - 22:00</p>
        </div>
      </div>
    </div>

    <div :class="$style.row_second">
      <div :class="$style.container">
        <n-link :class="$style.logo" to="/">
          <p>Ovosh</p>
        </n-link>

            <div :class="$style.search">
              <input
                class="no-round-input"
                type="text"
                placeholder="Что вы хотите?"
              />
            <div class="btn">
            <button class="button">Поиск</button>
          </div>
          </div>
        
     
        <CartButton />
      </div>
    </div>
  </div>
</template>

<script>
import CartButton from '~~/components/header/CartButton'
export default {
  components: {
    CartButton,
  },
}
</script>

<style lang="scss" module>
.container {
  @include globalWrapper;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header {
  background-color: $basic-bg-color;
}
.adress {
  display: flex !important;
  flex: 0 0 50%;
  max-width: 50%;
  justify-content: flex-start;
  p {
    margin-right: 20px;
  }
}
.search {
  border: 1px solid #f5f5f5;
  display: flex;
}
.work_time {
  display: flex;

  p {
    margin-right: 20px;
  }
}
.row_first {
  padding: 15px;
  background-color: $second-bg-color;
}

.row_second {
  padding: 20px 0;
}
.logo {
  justify-content: flex-start;
  font-size: 2.2em;
  font-weight: 700;
  opacity: 1;
  color: $basic-txt-color;
  text-decoration: none;
}
@media (max-width: 960px) {
  .row_first {
    display: none;
  }
  .container {
  flex-direction: column;
  }
}
</style>
