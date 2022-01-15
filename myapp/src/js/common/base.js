/**-------------------------------------------
 * Class base
 * CreateBy: Cong Sy Nguyen (2-21-12-25)
 */
class BaseJS {
  constructor() {
    this.host = "http://127.0.0.1:5000";
    this.apiRouter = null;
    this.setApiRouter();
    this.getDataUrl = null;
    this.setDataUrl();
    this.loadData();
    this.initEvents();
  }

  /**-----------------------------------------
   * Set url cho api, được ghi đè từ lớp con
   * Created By: Cong Sy Nguyen (2021-12-26)
   */
  setDataUrl() {}

  setApiRouter() {}

  /**
   * Init event
   * Created By: Cong Sy Nguyen (2021-12-29)
   */
  initEvents() {
    var me = this;
    // Sự kiện click khi bấm thêm mới.
    $("#btnAddStaff").click(function () {
      me.formMode = "add";
      // Hiển thị form thêm mới
      dialogDetail.dialog("open");
      $(".loading").show();
      // Get work status to file option of select
      var selectWorkStatus = $("select#selectWorkStatus");
      selectWorkStatus.empty();
      // Fake data
      var workStatus = [
        { id: "status_1", name: "Đang làm việc" },
        { id: "status_2", name: "Đã nghỉ việc" },
        { id: "status_3", name: "Thích đi chơi" },
      ];
      $.each(workStatus, function (index, status) {
        var option = $(
          `<option value="${status.id}"> ${status.name} </option>`
        );
        selectWorkStatus.append(option);
      });
      $(".loading").hide();
    });

    // Ẩn form thêm mới khi bấm hủy
    $("#btnCancel").click(
      function () {
        // Đóng form thêm/sửa nhân viên
        dialogDetail.dialog("close");
        // Xóa class in đậm của row được chọn
        $("table tbody tr td").removeClass("row-select");
      }.bind(me)
    );

    // Save thông tin khi thêm dữ liệu
    $("#btnSave").click(function () {
      // Validate thông tin
      var inputValidates = $('.txtInputRequire, input[type="email"]');
      $.each(inputValidates, function (index, input) {
        $(input).trigger("blur");
      });
      var inputNotValids = $('input[isValidate="false"]');
      if (inputNotValids && inputNotValids.length > 0) {
        alert("Dữ liệu không hợp lệ vui lòng kiểm tra lại");
        inputNotValids[0].focus();
        return;
      }
      // Thu thập thông tin dữ liệu được nhập -> build thành object
      // Cách này là cách thủ công, lấy từng trường
      /*
        var staff = {
          "EmployeeId": $('#txtId').val(),
          "EmployeeCode":  $('#txtId').val(),
          "FullName":  $('#txtFullname').val(),
          "Gender": 0,
          "DateOfBirth": "1988-06-06:00:00",
          "PhoneNumber": $('#txtPhone').val(),
          "Email": $('#txtEmail').val(),
          "Address": "Chân Châu Cảng Tân Bến Thượng Hải",
          "Salary": 18445194,
          "PositionName": "Giám đốc",
          "DepartmentName": "Hành chính",
          "WorkStateName": "Đang làm việc"
        }
        */

      // Cách auto

      var inputs = $("input[fieldName], select[fieldName]");
      var staff = {};
      $.each(inputs, function (index, input) {
        var propertyName = $(this).attr("fieldName");
        var value = $(this).val();
        staff[propertyName] = value;
      });

      // Gọi service tương ứng thực hiện lưu dữ liệu
      if (me.formMode == "add") {
        $.ajax({
          url: me.host + me.apiRouter,
          method: "POST",
          data: JSON.stringify(staff),
          contentType: "application/json",
          async: true,
        })
          .done(function (res) {
            alert("Add thành công");
            dialogDetail.dialog("close");
            me.loadData();
          })
          .fail(function (ex) {
            alert(ex);
          });
      } else {
        staff["EmployeeId"] = me.recordId;
        alert("Save thành công");
        dialogDetail.dialog("close");
        me.loadData();
      }
    });

    // Refresh bảng nhân viên
    $("#btnRefresh").click(
      function () {
        alert("refresh");
        me.loadData();
      }.bind(me)
    );

    /**
     * Sự kiện xóa 1 dòng
     * CreatedBy: Cong Sy Nguyen (2022-01-11)
     */
    $("table tbody").on("click", "button", function () {
      // Lấy khóa chính của bản ghi
      var recordId = $(this).data("recordId");
      console.log(recordId);
      // Tạo answer question
      var answer = window.confirm("Bạn có chắc chắn muốn xóa data?");
      if (answer) {
        console.log(recordId);
        // Gọi api xóa
        // Load lại data table
      } else {
        // Không làm gì
      }
    });

    // Hiển thị thông tin chi tiết khi double click vào 1 dòng
    // // Nếu tr chưa được init mà đã gán sự kiện click thì sẽ không ăn
    // $("tr").dblclick(function () {
    //   dialogDetail.dialog("open");
    // });

    // Do đó sẽ khai báo sự kiện cho tr ngay từ khi khai báo tbody để mở rộng thêm phạm vi
    // Nếu gán cho tbody init sau thì event cũng sẽ không ăn
    // Nếu nhiều sự kiện cùng tên thì sẽ thực hiện hết các sự kiện từ trên xuống dưới.

    $("table tbody").on("dblclick", "tr", function () {
      // Lấy khóa chính của bản ghi
      $(this).find("td").addClass("row-select");
      me.formMode = "edit";
      var recordId = $(this).data("recordId");
      me.recordId = recordId;
      // Gọi service lấy thông tin chi tiết qua ID
      var response = {
        ID: "123456 detail",
        Fullname: "Nguyễn Công Sỹ detail",
        Birthday: "1988-06-06:00:00",
        Gender: "1",
        IdCard: "cmt update",
        DatetimeIdCard: "1988-06-06:00:00",
        IdCardAddress: "IdCardAddress update",
        Email: "email_udpate@gmail.com",
        Phone: "0123456789",
      };
      // Build lên form chi tiết
      var inputs = $("input[fieldName], select[fieldName]");
      var staff = {};
      $.each(inputs, function (index, input) {
        var propertyName = $(this).attr("fieldName");
        var value = response[propertyName];
        staff[propertyName] = value;
        $(this).val(value);
      });
      dialogDetail.dialog("open");
    });

    /**
     * Validate nhập thông tin cho các trường text không được bỏ trống
     * CreateBy: Cong Sy Nguyen (2022-01-01)
     */
    $(".txtInputRequire").blur(function () {
      // Kiểm tra dữ liệu đã nhập, nếu để trống thì cảnh báo
      var value = $(this).val();
      if (!value) {
        $(this).addClass("border-red");
        $(this).attr("title", "Trường này không được để trống");
        $(this).attr("isValidate", false);
      } else {
        $(this).removeClass("border-red");
        $(this).attr("isValidate", true);
      }
    });

    // Function validate email copy trên mạng
    function isEmail(email) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }

    // Validate email
    $('input[type="email"]').blur(function () {
      var value = $(this).val();
      if (!isEmail(value)) {
        $(this).addClass("border-red");
        $(this).attr("title", "Không đúng định dạng email");
        $(this).attr("isValidate", false);
      } else {
        $(this).attr("isValidate", true);
      }
    });
  }

  /**------------------------------------------
   * Load dữ liệu từ api
   * URL của api sẽ được ghi đè từ lớp con
   * CreatedBy: Cong Sy Nguyen (2021/12/26)
   */
  loadData() {
    $(".loading").show();
    try {
      // Lấy thông tin các cột dữ liệu
      $("table tbody").empty();
      var columns = $("table thead th");
      $("table thead tr").append(`<th>Thao tác</th>`);
      var getDataUrl = this.getDataUrl;
      $.ajax({
        url: getDataUrl,
        method: "GET",
        async: true,
      })
        .done(function (res) {
          $.each(res.items, function (index, obj) {
            var tr = $(`<tr></tr>`);
            var recordId = obj.EmployeeId;
            $(tr).data("recordId", recordId);
            // Lấy thông tin dữ liệu tương ứng với các cột
            $.each(columns, function (index, th) {
              var td = $(`<td></td>`);
              var fieldName = $(th).attr("fieldname");
              var value = obj[fieldName];
              var formatType = $(th).attr("formattype");
              switch (formatType) {
                case "ddmmyyyy":
                  value = formatDate(value);
                  break;
                case "moneyVND":
                  value = formatMoney(value);
                  break;
                default:
                  break;
              }
              $(td).append(value);
              $(tr).append(td);
            });
            var deleteButton = $(
              `<td><div><button class="btnDelete"><img src="assets/icon/delete.png" alt="Girl in a jacket" width="15" height="15"></button></td>`
            );
            $(deleteButton.find("button")).data("recordId", recordId);
            $(tr).append(deleteButton);
            $("table tbody").append(tr);
          });
          // Đóng vòng tròn loading process khi đã xử lý xong
          $(".loading").hide();
        })
        .fail(function (res) {});
      // Binding dữ liệu lên table
    } catch (e) {
      $(".loading").hide();
    }
  }

  saveStaff() {
    // Validate thông tin
    var inputValidates = $('.txtInputRequire, input[type="email"]');
    $.each(inputValidates, function (index, input) {
      $(input).trigger("blur");
    });
    var inputNotValids = $('input[isValidate="false"]');
    if (inputNotValids && inputNotValids.length > 0) {
      alert("Dữ liệu không hợp lệ vui lòng kiểm tra lại");
      inputNotValids[0].focus();
      return;
    }
    // Thu thập thông tin dữ liệu được nhập -> build thành object
    // Cách này là cách thủ công, lấy từng trường
    /*
      var staff = {
        "EmployeeId": $('#txtId').val(),
        "EmployeeCode":  $('#txtId').val(),
        "FullName":  $('#txtFullname').val(),
        "Gender": 0,
        "DateOfBirth": "1988-06-06:00:00",
        "PhoneNumber": $('#txtPhone').val(),
        "Email": $('#txtEmail').val(),
        "Address": "Chân Châu Cảng Tân Bến Thượng Hải",
        "Salary": 18445194,
        "PositionName": "Giám đốc",
        "DepartmentName": "Hành chính",
        "WorkStateName": "Đang làm việc"
      }
      */

    // Cách auto

    var inputs = $("input[fieldName], select[fieldName]");
    var staff = {};
    $.each(inputs, function (index, input) {
      var propertyName = $(this).attr("fieldName");
      var value = $(this).val();
      staff[propertyName] = value;
    });
    debugger;
    // Gọi service tương ứng thực hiện lưu dữ liệu
    if (me.formMode == "add") {
      $.ajax({
        url: me.host + me.apiRouter,
        method: "POST",
        data: JSON.stringify(staff),
        contentType: "application/json",
        async: true,
      })
        .done(function (res) {
          alert("Add thành công");
          dialogDetail.dialog("close");
          me.loadData();
        })
        .fail(function (ex) {
          alert(ex);
        });
        // dialogDetail.dialog("close");
    } else {
      staff["EmployeeId"] = me.recordId;
      console.log(me.recordId);
      alert("Save thành công");
      dialogDetail.dialog("close");
      me.loadData();
    }
  }
}
