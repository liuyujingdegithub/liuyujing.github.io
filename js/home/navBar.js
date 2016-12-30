/**
 * Created by liuyujing on 2016/12/22.
 */
(function () {

    function NavBar(url,superView,getItemsCallback) {

        this.superView = superView;

        this.showNavBar(url,getItemsCallback);

        this.items = [];

        HTTPClient.call(this);
    }

    NavBar.prototype = new HTTPClient();


    NavBar.prototype.showNavBar = function (url,getItemsCallback) {

        this.navBar = $("<ul class='nav-container'></ul>");
        this.superView.append(this.navBar);

        var self = this;

        this.getJson(url,function (result) {

            console.log(result);

            if (!result){
                console.log("没有获得到数据");
                return;
            }

            //转成json对象
            var dataList = $($.parseJSON(result));

            //把json字符串 转成了 盛放json对像的 数组
            console.log($.parseJSON(result));
            console.log(dataList);

            dataList.each(function () {

                var item = new NavBarItem(this);
                self.navBar.append(item.li);

                self.items.push(item);

            });

            //防止  为加载完数据 去获得数组的情况
            if (getItemsCallback){

                getItemsCallback(self.items);

            }

        });

    };



    //创建  导航栏 里面元素的类
    function NavBarItem(info) {
        this.info = info;

        this.li = $("<li>"+info.className+"</li>");
    }

    window.NavBarItem = NavBarItem;
    window.NavBar = NavBar;
})();