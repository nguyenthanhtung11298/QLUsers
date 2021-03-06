function Validation(){
    //Phương thức
    //Kiểm tra ô nhập liệu có bị trống hay k
    this.checkEmpty = function(inputVal,spanID,message){
        // .trim(): Xóa khoảng trắng ở trước và sau chuỗi
        if(inputVal.trim()==""){
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        else{
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }
    // Kiểm tra mã trùng
    this.checkID = function(inputVal,spanID,message,mang,termTK){
        // Kiểm tra mã đã tồn tại trong mảng chưa
        var isExist = false;
        // Some: lấy mảng ra đem so sánh điều kiện và trả về giá trị true hoặc false
        isExist= mang.some(function(item){
            return item.taiKhoan === inputVal.trim() ;
        });
        if(isExist&&inputVal.trim()!==termTK){
            // Mã bị trùng, không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        else{
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }
    // kiểm tra tên sv
    this.checkName = function(inputVal,spanID,message){
        //RegExp: Chuyển từ string sáng regular expressions
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$") ;
        if(pattern.test(inputVal)){
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkPass = function(inputVal,spanID,message){
        var passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        if(inputVal.match(passFormat)){
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkEmail = function(inputVal,spanID,message){
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputVal.match(mailFormat)){
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkloaiNguoiDung = function(selID,spanID,message){
        console.log(document.getElementById(selID).selectedIndex)
        var optValue = document.getElementById(selID).selectedIndex;
        if(optValue!=0){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }  
    this.checkNgonNgu = function(selID,spanID,message){
        
        var optIndex = document.getElementById(selID).selectedIndex;
        if(optIndex!=0){
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }  
    this.checkMoTa = function(inputVal,spanID,message){
        var moTaFormat = /^.{1,60}$/;
        if(inputVal.match(moTaFormat)){
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
}