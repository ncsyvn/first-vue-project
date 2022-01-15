<template>
  <div>
    <thong-tin-giao-vien ten_giao_vien_static="Giao Vien static" :ten_giao_vien_dynamic="hoTen"></thong-tin-giao-vien>
  </div>
</template>

<script>
import thongTinGiaoVien from './ThongTinGiaoVien.vue'
export default({
  name: 'thongTinHocSinh',
  components: {thongTinGiaoVien},
  data: function () {
    return {
      hoTen: "Cong Sy Nguyen dynamic",
      diaChi: "76 chua Ha",
    };
  },
});
</script>
