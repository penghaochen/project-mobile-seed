<template>
  <div :style="{backgroundImage: `url(${background_image})`}" class="user_header">
    <van-icon name="set" class="user_set" @click="toSetting"/>
    <div class="user_avatar">
      <img :src="avatar" alt="头像" width="55" height="55">
    </div>
    <div>{{ nickName }}</div>
  </div>
</template>

<script>
import avatar_default from '@/assets/images/avatar_default.png'
import bg_default from '@/assets/images/user_head_bg.png'
import { getStore } from '@/utils/store'

export default {
  name: 'UserHeader',

  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      nickName: '昵称',
      avatar: avatar_default,
      background_image: bg_default
    }
  },

  activated() {
    this.getUserInfo()
  },

  methods: {
    getUserInfo() {
      const infoData = {
        'nickName': getStore({ name: 'nickName' }),
        'avatar': getStore({ name: 'avatar' })
      }

      this.avatar = infoData.avatar || avatar_default
      this.nickName = infoData.nickName || '昵称'
    },
    toSetting() {
      this.$router.push({ name: 'user-information' })
    }
  }
}
</script>

<style lang="scss" scoped>
.user_header {
  background-repeat: no-repeat;
  background-size: cover;
  height: 130px;
  text-align: center;
  color: #fff;
  padding-top: 30px;
}

.user_set {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
}
.user_avatar {
  margin-bottom: 10px;
  img {
    border: 0;
    border-radius: 50%;
  }
}
</style>
