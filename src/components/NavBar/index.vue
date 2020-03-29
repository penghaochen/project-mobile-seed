<template>
	<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  bind:click-left="onClickLeft"
  bind:click-right="onClickRight"
/>
</template>


<script>
import { NavBar } from 'vant';

export default {
  data() {
    return {

    };
  },

  watch: {

  },

  created() {

  },

  methods: {
    onClickLeft() {
        wx.showToast({ title: '点击返回', icon: 'none' });
    },
    onClickRight() {
        wx.showToast({ title: '点击按钮', icon: 'none' });
    }
  },

  components: {
    [NavBar.name]: NavBar
  }
};
</script>
