<template>
  <!-- Sidebar -->
  <div class="sidebar">
    <div class="flex-container sidebar-top">
      <img src="../../assets/img/toggle.png" width="32" height="32" />
      <img
        class="logo"
        src="../../assets/img/cukcuk-logo.png"
        width="120"
        height="32"
      />
    </div>
    <div class="menu">
      <div class="flex-container menu-item">
        <img src="../../assets/icon/dashboard.png" width="28" height="28" />
        <p class="text-item">Tổng quan</p>
      </div>
      <div class="flex-container menu-item">
        <img src="../../assets/icon/report.png" width="28" height="28" />
        <p class="text-item">Báo cáo</p>
      </div>
      <div class="flex-container menu-item">
        <img src="../../assets/icon/dashboard.png" width="28" height="28" />
        <p class="text-item">Mua hàng</p>
      </div>
      <div class="flex-container menu-item">
        <img src="../../assets/icon/dic-employee.png" width="28" height="28" />
        <p class="text-item">Danh mục nhân viên</p>
      </div>
      <div class="flex-container menu-item">
        <img src="../../assets/icon/setting.png" width="28" height="28" />
        <p class="text-item">Thiết lập hệ thống</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
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
