<template>
  <div>
    <van-nav-bar
      :title="title"
      :fixed="true"
      left-text="返回"
      right-text=""
      left-arrow
      @click-right="onClickRight"
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant'

export default {
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: {
      type: String,
      default: '首页'
    }
  },
  data() {
    return {

    }
  },

  watch: {

  },

  created() {

  },

  methods: {
    onClickLeft() {
      this.$router.go(-1)
      // wx.showToast({ title: '点击返回', icon: 'none' })
    },
    onClickRight() {
      alert(2)
      // wx.showToast({ title: '点击按钮', icon: 'none' })
    }
  }
}
</script>
