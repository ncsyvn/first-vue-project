$(document).ready(function () {
  new StaffJS();
  dialogDetail = $(".m-dialog").dialog({
    autoOpen: false,
    fluid: true,
    resizable: true,
    modal: true
  })
});

/**----------------------------------------------
 * Class quản lý staff
 * CreatedBy: Cong Sy Nguyen (2021-12-25)
 */
class StaffJS extends BaseJS {
  constructor() {
    super();
  }
  /**
   * Set url cho api, ghi đè method của lớp cha
   * Created By: Cong Sy Nguyen (2021-12-23)
   */
  setDataUrl(){
    this.getDataUrl = 'http://127.0.0.1:5000/staffs'
  }
  setApiRouter(){
    this.apiRouter = '/staffs';
  }
}

