class UserServices{
    //Không xài arrow function cho phương thức của lớp
    layDanhSachUsers = function(){
        return axios({
            method: 'get',
            url: 'https://613f5f9ae9d92a0017e17678.mockapi.io/Users',

        });
    }
    themUser = function(user){
        return axios({
            method: 'post',
            url: 'https://613f5f9ae9d92a0017e17678.mockapi.io/Users',
            data: user
        });
    }
    xemUser = function (id){
        return axios({
            method: 'get',
            url: `https://613f5f9ae9d92a0017e17678.mockapi.io/Users/${id}`,
        });
    }
    capnhatUser = function(user,id) {
        return axios({
            method: 'put',
            url: `https://613f5f9ae9d92a0017e17678.mockapi.io/Users/${id}`,
            data: user
        });
    }
    xoaUser = function(id){
        return axios({
            method: 'delete',
            url: `https://613f5f9ae9d92a0017e17678.mockapi.io/Users/${id}`,
        });
    }
}




