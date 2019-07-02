<template>
  <div class="hello">
    <p>male</p>
    <ul>
    <li v-for="item in maleArr" :key='item'>
       {{ item.name }}
    </li>
    </ul>
    <p>female</p>
    <ul>
    <li v-for="item in femaleArr" :key='item'>
       {{ item.name }}
    </li>
    </ul>
  </div>
</template>

<script>
import { debug } from 'util';

export default {
  name: 'index',
  data() {
    return {
      maleArr: [],
      femaleArr: [],
    };
  },
  created() {
    this.getPetsAndOwners();
  },
  methods: {
    getPetsAndOwners() {
      this.axios({
        method: 'get',
        url: process.env.PETS_URL,
      }).then((data) => {
        for (const value of data.data) {
          if (value.gender === 'Male') {
            this.maleArr.push({ name: value.name });
          } else {
            this.femaleArr.push({ name: value.name });
          }
        }
      });
    },
  },
};
</script>
<style >
    ul{
        list-style:none;
        margin-left:30px;
    }
    ul li{
        margin-top:10px;
    }
</style>
