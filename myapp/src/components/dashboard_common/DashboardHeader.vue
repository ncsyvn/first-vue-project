<template>
  <div class="header flex-container">
    <select class="select-restaurantName">
      <option>Nhà hàng Biển đông</option>
      <option>Nhà hàng Biển tây</option>
    </select>
    <div class="header-userInfo">
      <img
        id="default_avatar"
        src="../../assets/icon/avatar-default.png"
        width="40px"
        height="40px"
      />
      <p>Nguyễn Văn Mạnh</p>
      <input class="header-buttonSetting" type="button" />
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboardHeader",
  data: function () {
    return {
      a: 1,
    };
  },
};
</script>

<style>
@import "../../css/common/common.css";
@import "../../css/layout/header.css";
@import "../../css/manage/staff/admin_staff_page.css";
@import "../../css/layout/sidebar.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "../../css/manage/staff/admin_add_staff.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
/* @import '/path/to/font-awesome/css/font-awesome.min.css'; */
@import "../../css/layout/footer.css";
</style>
