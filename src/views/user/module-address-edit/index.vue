<template>
  <div>
    <van-nav-bar title="编辑地址" left-text="返回" left-arrow @click-left="goback"/>
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      style="background-color: #fff;"
      show-set-default
      show-delete
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { AddressEdit, NavBar } from 'vant'
import areaList from './area.json'
import { addressDetail, addressSave, addressDelete } from '@/api/api'
import { removeStore } from '@/utils/store'

export default {
  name: 'AddressEdit',

  components: {
    [NavBar.name]: NavBar,
    [AddressEdit.name]: AddressEdit
  },

  data() {
    return {
      areaList,
      addressId: 0,
      addressInfo: {}
    }
  },
  created() {
    this.addressId = this.$route.query.addressId
    if (this.addressId !== -1 && this.addressId !== 0) {
      this.init()
    }
  },

  methods: {
    init() {
      addressDetail({ id: this.addressId }).then(res => {
        this.addressInfo = res.data.data
      })
    },
    onSave(content) {
      addressSave(content).then(() => {
        this.$toast('成功')
        this.$router.go(-1)
      })
    },
    onDelete(content) {
      addressDelete({ id: content.id })
      removeStore({
        name: 'AddressId',
        type: 'local'
      })
      this.$router.go(-1)
    },
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>
