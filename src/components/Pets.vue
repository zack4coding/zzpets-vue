<template>
  <div class="hello">
    <p>male</p>
    <ul >
    <li v-for="item in maleArr" :key='item' role="columnheader" aria-sort="ascending">
       {{ item }}
    </li>
    </ul>
    <p>female</p>
    <ul aria-sort="ascending" role="columnheader">
    <li v-for="item in femaleArr" :key='item' role="columnheader" aria-sort="ascending">
       {{ item }}
    </li>
    </ul>
  </div>
</template>

<script>
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
      const maleArrDisorder = [];
      const femaleArrDisorder = [];
      const that = this;
      this.axios({
        method: 'get',
        url: process.env.PETS_URL,
      }).then((res) => {
        /**
         *  Pick up cats.
         */
        res.data.forEach((owner) => {
          if (owner.pets !== null) {
            owner.pets.forEach((pet) => {
              if (pet.type === 'Cat') {
                if (owner.gender === 'Male') {
                  maleArrDisorder.push(pet.name);
                } else {
                  femaleArrDisorder.push(pet.name);
                }
              }
            });
          }
        });

        /**
         *  Sorted the cat name list.
         *  And bind to show.
         */
        that.maleArr = maleArrDisorder.sort();
        that.femaleArr = femaleArrDisorder.sort();
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
