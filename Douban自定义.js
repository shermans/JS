// ==UserScript==
// @name           Douban自定义 
// @namespace         https://greasyfork.org/
// @description    自用，我是纯金小白。不是我写的。许可之类的我也不懂。出现bug我也不知道怎么修复。请不要使用。也不必反馈。真的不好意思了。
// @version       00033
// @include        https://movie.douban.com/subject/*
// @include        https://book.douban.com/subject/* 
// @license MIT

// @downloadURL https://update.greasyfork.org/scripts/440724/Douban%E8%87%AA%E5%AE%9A%E4%B9%89.user.js
// @updateURL https://update.greasyfork.org/scripts/440724/Douban%E8%87%AA%E5%AE%9A%E4%B9%89.meta.js
// ==/UserScript==
 
function run () {
	var movieTitle = $('h1 span:eq(0)').text();
	var title = $('html head title').text();
	var keyword1 = title.replace( '(豆瓣)', '' ).trim();
	var keyword2 = encodeURIComponent( keyword1 );
	var movieSimpleTitle = movieTitle.replace(/第\S+季.*/, "");
 
	var Movie_links = [
		// { html: "百度盘", href: "http://www.baidu.com/s?wd=" + encodeURIComponent(keyword1 + " site:pan.baidu.com")},
/// 小网站随时跑路.还是维护超大站才行
 
		{ html: "解说", href: "https://search.bilibili.com/all?keyword=%E8%A7%A3%E8%AF%B4++" + keyword1},
		{ html: "在线", href: "https://www.google.com.bz/search?safe=off&q=在线++"+ keyword1},
		{ html: "online", href: "https://www.google.com.bz/search?safe=off&q=online++"+ keyword2},
		{ html: "可可", href: "https://www.keke7.app/search?os=pc&k="+ keyword1},
		{ html: "爱看", href: "https://v.aikanbot.com/search?q="+ keyword1},
		{ html: "下载", href: "https://www.google.com.bz/search?safe=off&q=下载++"+ keyword1},
		{ html: "迅雷", href: "https://www.google.com.bz/search?safe=off&q=迅雷++"+ keyword1}，   
		{ html: "阿里盘搜", href: "https://www.alipansou.com/search?k=" + movieSimpleTitle }, 
		{ html: "BTsow", href: "https://btsow.motorcycles/search/" + movieSimpleTitle }, 
		{ html: "电影狗", href: "https://www.dianyinggou.com/so/" + keyword1},
		{ html: "哔哩", href: "https://search.bilibili.com/all?keyword=" + keyword1},


		{ html: "更新脚本", href: "https://raw.githubusercontent.com/shermans/JS/refs/heads/main/Douban%E8%87%AA%E5%AE%9A%E4%B9%89.js" }, 

	];
 
	var Book_links = [
		{ html: " Libgen ", href: "https://libgen.li/index.php?req="+ keyword1},	
		{ html: " Annas ", href: "https://zh.annas-archive.org/search?q="+ keyword1},
		{ html: " Zlibrary ", href: "https://zlibrary-global.se/s/"+ keyword1},
		{ html: " 哔哩 ", href: "https://search.bilibili.com/all?vt=10899605&keyword="+ keyword1 + "&order=click"},
		{ html: " 阿里盘搜 ", href: "https://www.alipansou.com/search?k=" + movieSimpleTitle }, 
		{ html: " Google下载 ", href: "https://www.google.com.bz/search?safe=off&q=下载++"+ keyword1},
		{ html: " Lorefree ", href: "https://www.google.com.bz/search?safe=off&q=site%3Alorefree.com++"+ keyword1}, 
		
		
	];
 
	var link = $("<div>").append(
		$("<span>").attr("class", "pl").html("在线搜索:")
	);
 
	switch(location.host){
		case "movie.douban.com":
			appendLinks(Movie_links, link)
 
			link.append('<br>')
				.append('<span class="pl">射手字幕:</span>')
				.append(
					$("<a>").attr({
						href: "http://shooter.cn/search/" + movieTitle,
						target: "_blank"
					}).html("Shooter")
				);
 
			break;
		case "book.douban.com":
			appendLinks(Book_links, link)
			break;
	}
 
	$('#info').append(link);
 
 
	function appendLinks(items, appendTo){
		items.forEach(function(item, i){
			$("<a>")
				.html(item.html)
				.attr({
					href: item.href,
					target: "_blank"
				})
				.appendTo(appendTo);
 
			if(i != items.length -1){
				appendTo.append("  /    ");
			}
		});
	}
}
 
run()
