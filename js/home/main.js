/**
 * Created by liuyujing on 2016/12/22.
 */
(function () {

    function init() {

        showContent("1");

        new NavBar("http://datainfo.duapp.com/shopdata/getclass.php",$(".navBar"),function (items) {
            $(items).each(function () {
                console.log(this);
                var self = this;
                this.li.click(function () {
                    showContent(self.info.classID);
                });
            });
        });
    }

    function showContent(classID) {

        new GoodsListView("http://datainfo.duapp.com/shopdata/getGoods.php",{classID:classID},$(".main-container"));

    }

    init();

})();