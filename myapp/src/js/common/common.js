/**---------------------------------------------------------------
 * Format dữ liệu ngày tháng sang ngày, tháng, năm
 * @param {any} date dữ liệu dạng date hoặc bất cứ kiểu dữ liệu gì
 * @returns day/month/year
 * CreateBy: Cong Sy Nguyen (2021/12/23)
 */
 function formatDate(date) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
      return "";
    } else {
      var day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();
      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;
  
      return day + "/" + month + "/" + year;
    }
  }
  
  /**--------------------------------------------------
   * Format dữ liệu tiền tệ
   * @param {Number} money
   * @returns Tiền tệ phân cách cụm 3 ký tự
   * CreateBy: Cong Sy Nguyen (2021/12/23)
   */
  function formatMoney(money) {
      if (money){
        return money.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
      return "";
    
  }
  