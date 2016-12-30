/**
 * Created by liuyujing on 2016/12/22.
 */
(function () {


    function init() {

        var goodsID = location.search.replace("?","");
        new GoodsView("http://datainfo.duapp.com/shopdata/getGoods.php",goodsID,$(".goods-container"));

    }

    init();

})();