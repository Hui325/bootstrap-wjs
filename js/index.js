/**
 * Created by Administrator on 2018/6/19.
 */
//屏幕改变时，切换图片
$(function(){
  var $imgs = $('.banner-img img');
  console.log($imgs);
  $(window).on("resize",function(){
    var pagewidth = $(window).width();

    if(pagewidth >= 640){
      $imgs.each(function () {
        var src = $(this).data("psrc");
          $(this).attr('src',src);
      });
    }else{
      $imgs.each(function(){
        var src = $(this).data("msrc");
        $(this).attr('src',src);
      });
    }
  });
  $(window).trigger('resize');
})

//设置区域滚动
$(function(){
  //获取ul对象
  var $ul = $('.wjs_product .tab_wrapper ul');
  //获取li元素
  var lis = $($ul).children();
  var tatal = 0;
  lis.each(function(){
    var liWidth = $(this).width();
    tatal += liWidth;
  })
  $ul.width(tatal);

  //设置区域滚动
 new IScroll('.tab_wrapper',{
   scrollX : true,
   scrollY : false
 })
})

//添加手指事件
$(function(){
  //找到轮播对象
  var carousel = $('.wjs_banner .carousel');
  //存放手指开始坐标，用来判断手指向哪个方向滑
  var startX = 0;
  //绑定手指事件
  // jQuery 对原生事件进行了封装处理, 解决了兼容性问题
  // 里面 originalEvent 才是 原始的事件对象
  carousel.on("touchstart",function(e){
    startX = e.originalEvent.touches[0].clientX;
  });

  carousel.on("touchend",function(e){
    var distance = e.originalEvent.changedTouches[0].clientX - startX;
    //向右滑
    if(distance > 50){
      carousel.carousel('prev');
    }else if(distance < -50){
      carousel.carousel('next');
    }

  });
})