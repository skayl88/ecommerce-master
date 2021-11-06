<template>
  <div v-if="bredcrumbs && bredcrumbs.length > 0" :class="$style.breadcrumbs">
    <ul>
      <li v-for="cr in bredcrumbs" :key="cr.url">
        <n-link :to="cr.url">
          {{ cr.title }}
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      bredcrumbs: 'bredcrumbs'
    })
  }
}
</script>

<style lang="scss" module>
/* Style the list */
.breadcrumbs {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 30px;
      border-top: 1px solid #ebebeb;

    ul, li{
list-style: none;
    padding-left: 5px;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;


    @include globalWrapper;
    li {
          list-style: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
      display: inline;
      font-size: 18px;
      + ::before {
        padding: 8px;
        color: black;
        content: '/\00a0';
      }
      a {
     
        text-decoration: none;

        &:hover {
        
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
