<template>
  <div class="flex-container">
    <!-- Sidebar component -->
    <sidebar></sidebar>
    <!-- Main -->
    <div class="main_page">
      <!-- Header component -->
      <dashboardHeader></dashboardHeader>
      <!-- main -->
      <div class="flex-container first-row">
        <p style="font-size: 18px; font-weight: bold">
          <b>Danh sách nhân viên</b>
        </p>
        <!-- <button class="btn-addStaff" type="button">Thêm nhân viên</button> -->
        <button class="btn-addStaff" id="btnAddStaff">
          <i class="fa fa-user-plus"></i> Thêm nhân viên
        </button>
      </div>
      <div class="flex-container filter-row">
        <input
          class="searchStaff"
          type="text"
          placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
        />
        <select class="searchDepartment">
          <option value="all">Tất cả phòng ban</option>
          <option value="depart_1">Phòng ban 1</option>
          <option value="depart_2">Phòng ban 2</option>
          <option value="depart_3">Phòng ban 3</option>
        </select>
        <select class="searchPosition">
          <option value="all">Tất cả vị trí</option>
          <option value="position_1">Vị trí 1</option>
          <option value="position_2">Vị trí 2</option>
          <option value="position_3">Vị trí 3</option>
        </select>
        <button
          class="header-buttonRefresh"
          id="btnRefresh"
          type="button"
        ></button>
      </div>
      <!-- Staff information table -->
      <div class="allStaff">
        <table class="staff_table">
          <thead>
            <tr>
              <th fieldName="EmployeeCode">Mã nhân viên</th>
              <th fieldName="FullName">Họ và tên</th>
              <th fieldName="Gender">Giới tính</th>
              <th fieldName="DateOfBirth" formatType="ddmmyyyy">Ngày sinh</th>
              <th fieldName="PhoneNumber">Điện thoại</th>
              <th fieldName="Email">Email</th>
              <th fieldName="PositionName">Chức vụ</th>
              <th fieldName="DepartmentName">Phòng ban</th>
              <th fieldName="Salary" formatType="moneyVND">Mức lương cơ bản</th>
              <th fieldName="WorkStateName">Tình trạng công việc</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <footer>
        <div class="flex-container footer">
          <div>
            <p>Hiển thị 1-10/1000 nhân viên</p>
          </div>
          <div class="choosePage">
            <button
              class="directionPage footer-buttonFirstPage"
              type="button"
            ></button>
            <button
              class="directionPage footer-buttonPrePage"
              type="button"
            ></button>
            <button class="btn_page" type="button">1</button>
            <button class="btn_page" type="button">2</button>
            <button class="btn_page" type="button">3</button>
            <button class="btn_page" type="button">4</button>
            <button
              class="directionPage footer-buttonNextPage"
              type="button"
            ></button>
            <button
              class="directionPage footer-buttonLastPage"
              type="button"
            ></button>
          </div>
          <div>
            <p>10 nhân viên/trang</p>
          </div>
        </div>
      </footer>
      <!-- Detail staff component -->
      <staffDetail></staffDetail>
    </div>
  </div>
  <!-- <div class="loading">
      <div class="loading-modal"></div>
      <div class="loading-icon"></div>
    </div> -->
</template>

<script>
import dashboardHeader from  '../dashboard_common/DashboardHeader.vue'
import sidebar from '../dashboard_common/Sidebar.vue'
import staffDetail from '../staff/StaffDetail.vue'

export default {
  name: "staffList",
  components: {dashboardHeader, sidebar, staffDetail},
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
/* @import 'path/to/font-awesome/css/font-awesome.min.css'; */
@import "../../css/layout/footer.css";
</style>
