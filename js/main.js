//*********ナビのサブメニュー表示 *********/
$(function(){
    //リンクhoverで他のサブメニューは非表示
    $('.gnav_lowerMenu a').mouseover(function() {
        $('.hover-menu').hide();
    });
    //*********私達についてのHover時 *********/
    $('.nav-about a').mouseover(function() {
        $('#sub-menu-about').fadeIn();
    }).mouseout(function() {
        let array = [];
        jQuery(":hover").each(function () { //カーソル位置の全要素を走査
            array.push($(this).attr("class"));
        });

        if ($.inArray('gnav_main_block', array) >= 0 ){
            return ;
        }
        if ($.inArray('#sub-menu-about', array) >= 0 ){
            return ;
        }
        $('#sub-menu-about').fadeOut();
     
    });
    $('#sub-menu-about').hover(function() {
        //$('.gnav-about').fadeOut();
    },function() {
        $('#sub-menu-about').fadeOut();
    });

    //*********製品案内のHover時 *********/
    $('.nav-product a').mouseover(function() {
        $('#sub-menu-product').fadeIn();
    }).mouseout(function() {
        let array = [];
        jQuery(":hover").each(function () { //カーソル位置の全要素を走査
            array.push($(this).attr("class"));
        });

        if ($.inArray('gnav_main_block', array) >= 0 ){
            return ;
        }
        if ($.inArray('#sub-menu-product', array) >= 0 ){
            return ;
        }
        console.log(array);
        $('#sub-menu-product').fadeOut();
     
    });
    $('#sub-menu-product').hover(function() {
        //$('.gnav-about').fadeOut();
    },function() {
        $('#sub-menu-product').fadeOut();
    });

    //*********コンテンツのHover時 *********/
    $('.nav-contents a').mouseover(function() {
        $('#sub-menu-contents').fadeIn();
    }).mouseout(function() {
        let array = [];
        jQuery(":hover").each(function () { //カーソル位置の全要素を走査
            array.push($(this).attr("class"));
        });

        if ($.inArray('gnav_main_block', array) >= 0 ){
            return ;
        }
        if ($.inArray('#sub-menu-contents', array) >= 0 ){
            return ;
        }
        console.log(array);
        $('#sub-menu-contents').fadeOut();
     
    });
    $('#sub-menu-contents').hover(function() {
        //$('.gnav-about').fadeOut();
    },function() {
        $('#sub-menu-contents').fadeOut();
    });

    //*********会社案内のHover時 *********/
    $('.nav-company a').mouseover(function() {
        $('#sub-menu-company').fadeIn();
    }).mouseout(function() {
        let array = [];
        jQuery(":hover").each(function () { //カーソル位置の全要素を走査
            array.push($(this).attr("class"));
        });

        if ($.inArray('gnav_main_block', array) >= 0 ){
            return ;
        }
        if ($.inArray('#sub-menu-company', array) >= 0 ){
            return ;
        }
        console.log(array);
        $('#sub-menu-company').fadeOut();
     
    });
    $('#sub-menu-company').hover(function() {
        //$('.gnav-about').fadeOut();
    },function() {
        $('#sub-menu-company').fadeOut();
    });
    
  });
  

//ドロップダウンメニューの表示 .show-subMenu a
/*$(function() {
    var isOver = false;
    var isOver2 = false;
    $('.show-subMenu a').hover(function() {
        $('.gnav-about').fadeIn();
        isOver = true;
        //Hoverのフラグ
        $('.gnav-about').hover(function(){
            isOver = true;
        }, function(){
            isOver = false;
        }); 

        // メニュー領域外をクリックしたらメニューを閉じる
        if (isOver == false) {
            $('.gnav-about').fadeOut();        
        }else{
            $('.gnav-about').fadeIn();
        }
    });
});*/
// メニュー領域外をクリックしたらメニューを閉じる
//$('body').click(function() {
    //if (over_flg == false) {
    //  $('span').removeClass('selected');
    //  $('ul').slideUp('fast');
    // }
    $('.gnav-about').fadeOut();
 // });

//*********スマホメニュースライド  *******/
$(document).on("click", ".gnav_sp_menu", function(){
    $('.slide-menu-sp').addClass("fade-in-sub");
    $('.slide-menu-sp').removeClass("fade-out-sub");
    closeSub();
});
function closeSub (){
    $(document).on("click", ".close-icon", function(){
        $('.slide-menu-sp').addClass("fade-out-sub");
        $('.slide-menu-sp').removeClass("fade-in-sub");
    });
}
//*********スライド表示*********

/* 下から */
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        //スクロールでfade-b要素表示で実行
        $('.fade-b').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fade-in-bottom");
            }
        });
    });
});
/*　右から */
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        //スクロールでfade-r要素表示で実行
        $('.fade-r').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fade-in-right");
            }
        });
    });
});
/** 左から **/
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        //スクロールでfade-l要素表示で実行
        $('.fade-l').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fade-in-left");
            }
        });
    });
});


//*********タブ分けメニュー*********
//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#all←この#の値とタブ内のリンク名（例）#allが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}
// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});
//タブ範囲(トップニュース)
$(document).on("click", "#mainNews a", function(){
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});
//タブ範囲(製品案内)
$(document).on("click", "#mainProducts .tab a", function(){
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});
//タブ範囲(製品案内)
$(document).on("click", "#faq .tab a", function(){
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});

//******** Owl carousel********/
$(function(){
    $('.owl-carousel').owlCarousel({
            loop:true,　//項目をループさせる
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            margin:10,  //itemの間隔
            items: 4,   //表示する項目数
			responsive: { // レスポンシブ
				// ブレイクポイント0px以上
				0: {
				  items: 1,
				},
				// ブレイクポイント560px以上
				520: {
				  items: 2,
				},
				// ブレイクポイント980px以上
				980: {
				  items: 4,
				},
			  },
        })
});
///トップへ戻る
$(function(){
    var pagetop = $('#page_top');
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
    var pagetop = $('.back-to-top');
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
  //アンカーリンクはスクロール
  $(function(){
    $("a[href^=#anker]").click(function() {
        console.log(href);
        var speed = 500; // スクロール速度(ミリ秒)
        var href = $(this).attr("href");
        href = href.replace(/anker-/g, ''); //anker-を抜く
        console.log(href);
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    });

    //アコーディオン表示 or 非表示
    $(function () {
        //ac-childは初期で非表示
        $('.ac-child').hide();        
        $('.ac-parent').on('click', function () {
        $(this).next().slideToggle();
        //画像を入れ替える
        var className = $(this).attr("class"); 
        //FAQ
        if(className.indexOf("q-item") > -1){
            SwitchImageFaq(this);
        }
        //スマホメニュー
        if(className.indexOf("sp-icon") > -1){
            SwitchImageSP(this);
        }
      });
    });
    //FAQのアイコン画像変更
    function SwitchImageFaq (_this){
        //画像パス取得
        var imgs = ["minas-icon-b.svg","plus-icon-b.svg"];
        //FAQ
        var src  = $(".q-icon",$(_this)).children('img').attr('src');
        var tarr = src.split('/');      // 分割
        var file = tarr[tarr.length-1]; //最後の要素が画像名
        //画像をスイッチさせる
        //FAQのアイコン
        if(file == imgs[0]){
            $(".q-icon",_this).children('img').attr('src', '../images/' + imgs[1]);
        }else{
            $(".q-icon",_this).children('img').attr('src', '../images/' + imgs[0]);
        }
    }
    //スマホのアイコン画像変更
    function SwitchImageSP (_this){
        //画像パス取得
        var imgs = ["minas-icon.svg","plus-icon.svg"];
        //FAQ
        var src  = $(".icon",$(_this)).children('img').attr('src');
        var tarr = src.split('/');      // 分割
        var file = tarr[tarr.length-1]; //最後の要素が画像名
        //画像をスイッチさせる
        //FAQのアイコン
        if(file == imgs[0]){
            console.log(src);
            $(".icon",_this).children('img').attr('src', tarr[0] + "/" + tarr[1] + "/" + imgs[1]);
        }else{
            console.log(src);
            $(".icon",_this).children('img').attr('src', tarr[0] + "/" + tarr[1] + "/" + imgs[0]);
        }
    }
/** 追従バナーをフッターに固定 **/
$(function () {
    var throwContactPosi = 0;
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        //#content を通過した時点で追従をストップ
        if ($('#prosite').position().top < $('.banner-1').position().top ) {
            var posi = $('#prosite').position().top;
            $(".floating-banner").addClass("banner-stop");
            $('.banner-1').css('top',posi);
            $('.banner-2').css('top',posi + 185);
            //通過した時のwindow位置を取得
            throwContactPosi = scrollAmount;
        }
        //Contact位置より上にスクロールした場合は再度追従する
        if(throwContactPosi > scrollAmount){
            $('.banner-1').css('top',"");
            $('.banner-2').css('top',"");
            $(".floating-banner").removeClass("banner-stop");
        }
    });
});
