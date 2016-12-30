/**
 * Created by liuyujing on 2016/12/22.
 */
(function () {
    
    function GoodsView(url,id,superView) {

        this.showGoods(url,id,superView);
    }

    GoodsView.prototype = new HTTPClient();

    GoodsView.prototype.showGoods = function (url,id,superView) {

        var self = this;

        this.getJsonp(url,{goodsID:id},function (result) {
            console.log(result);

            self.createView(result[0],superView);

        });

    };

    GoodsView.prototype.createView = function (info,superView) {

        var images = info.imgsUrl.slice(2,info.imgsUrl.length-2).split("\",\"");

        console.log(images);

        superView.append("<img width='200px' src="+images[0]+"><p>￥"+info.price+"</p>")

    };


    window.GoodsView = GoodsView;
    
})();