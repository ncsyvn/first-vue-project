<template>
  <div class="m-dialog" v-if="isShow">
    <div class="dialog-modal mainForm">
      <div class="addStaffHeader">
        <div class="titlePage text-align-left">
          <p>THÔNG TIN NHÂN VIÊN</p>
        </div>
      </div>
      <div class="addStaffContent">
        <div class="flex-container">
          <div class="avatar">
            <img src="../../assets/img/default-avatar.jpg" />
            <p>(Vui lòng chọn ảnh có định dạng</p>
            <p>.jpg, .jpeg, .png, .gif)</p>
          </div>
          <div class="info">
            <div class="typeInfo">
              <p>A. THÔNG TIN CHUNG:</p>
              <hr />
            </div>
            <div class="flex-container">
              <div class="firstColumn">
                <p>Mã nhân viên (<span class="redStar">*</span>)</p>
                <input
                  id="txtId"
                  name="id"
                  class="txtInputRequire"
                  fieldName="ID"
                  type="text"
                />
              </div>
              <div>
                <p>Họ và tên (<span class="redStar">*</span>)</p>
                <input
                  id="txtFullname"
                  name="fullname"
                  class="txtInputRequire"
                  fieldName="Fullname"
                  type="text"
                />
              </div>
            </div>

            <div class="flex-container">
              <div class="firstColumn">
                <p>Ngày sinh</p>
                <input
                  id="birthday"
                  name="birthday"
                  fieldName="Birthday"
                  type="date"
                />
              </div>
              <div>
                <p>Giới tính</p>
                <select fieldName="Gender">
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>

            <div class="flex-container">
              <div class="firstColumn">
                <p>Số CMTND/Căn cước (<span class="redStar">*</span>)</p>
                <input
                  id="txtIdCard"
                  name="id_card"
                  fieldName="IdCard"
                  class="txtInputRequire"
                  type="text"
                />
              </div>
              <div>
                <p>Ngày cấp</p>
                <input
                  id="datetime_id_card"
                  fieldName="DatetimeIdCard"
                  name="datetime_id_card"
                  type="date"
                />
              </div>
            </div>

            <div class="flex-container">
              <div class="first_column">
                <p>Nơi cấp</p>
                <input
                  id="id_card_address"
                  name="id_card_address"
                  fieldName="IdCardAddress"
                  type="text"
                />
              </div>
            </div>

            <div class="flex-container">
              <div class="firstColumn">
                <p>Email (<span class="redStar">*</span>)</p>
                <input
                  id="txtEmail"
                  name="email"
                  fieldName="Email"
                  class="txtInputRequire"
                  type="email"
                />
              </div>
              <div>
                <p>Số điện thoại (<span class="redStar">*</span>)</p>
                <input
                  id="txtPhone"
                  name="phone"
                  fieldName="Phone"
                  class="txtInputRequire"
                  type="text"
                />
              </div>
            </div>

            <div class="typeInfo">
              <p>B. THÔNG TIN CÔNG VIỆC</p>
              <hr />
            </div>
            <div class="flex-container">
              <div class="firstColumn">
                <p>Vị trí</p>
                <select>
                  <option>Giám đốc</option>
                  <option>Nhân viên</option>
                </select>
              </div>
              <div>
                <p>Phòng ban</p>
                <select>
                  <option>Phòng nhân sự</option>
                  <option>Phòng hành chính</option>
                </select>
              </div>
            </div>

            <div class="flex-container">
              <div class="firstColumn">
                <p>Mã số thuế cá nhân</p>
                <input
                  id="tax_number"
                  fieldName="TaxNumber"
                  name="tax_number"
                  type="text"
                />
              </div>

              <div>
                <p>Mức lương cơ bản</p>
                <input
                  id="base_salary"
                  fieldName="BaseSalary"
                  name="base_salary"
                  type="text"
                />
              </div>
            </div>

            <div class="flex-container">
              <div class="firstColumn">
                <p>Ngày gia nhập công ty</p>
                <input
                  id="datetime_join"
                  fieldName="DatetimeJoin"
                  name="datetime_join"
                  type="date"
                />
              </div>
              <div>
                <p>Tình trạng công việc</p>
                <select id="selectWorkStatus"></select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="addStaffFooter">
        <div class="flex-container footerAction">
          <button class="btnCancel" id="btnCancel">Hủy</button>
          <button class="btnSave" id="btnSave">
            <i class="fa fa-save"></i> Lưu
          </button>
          <!-- <button class="btnSaveCustom"><img src="../../assets/icon/btn-firstpage.svg" alt="Girl in a jacket" width="15" height="15"> Lưu</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "staffDetail",
  data: function () {
    return {
      isShow: false
    };
  },
};
</script>

<style>
@import "../../css/common/common.css";
@import "../../css/common/dialog.css";
@import "../../css/layout/header.css";
@import "../../css/manage/staff/admin_staff_page.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "../../css/manage/staff/admin_add_staff.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
/* @import 'path/to/font-awesome/css/font-awesome.min.css'; */
@import "../../css/layout/footer.css";
@import "../../css/layout/header.css";
@import "../../css/layout/sidebar.css";
</style>
