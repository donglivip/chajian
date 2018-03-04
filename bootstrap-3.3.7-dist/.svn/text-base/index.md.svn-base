###Welcome to use MarkDown
----------------------------------列对用屏幕类--------------------------
超小屏幕 手机 (<768px)	小屏幕 平板 (≥768px)	中等屏幕 桌面显示器 (≥992px)	大屏幕 大桌面显示器 (≥1200px)


col-xs-					.col-sm-			.col-md-			.col-lg-
多余(超出的)列将重启一行,但有时候列的高度不一样,会造成样式混乱,可以使用clearf
<div class="row">
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>

  <!-- Add the extra clearfix for only the required viewport -->
  <div class="clearfix visible-xs-block"></div>

  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
</div>
----------------------------------列偏移--------------------------
1.col-md-offset-(向右侧偏移)
----------------------------------列嵌套--------------------------
<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-xs-8 col-sm-6">
        Level 2: .col-xs-8 .col-sm-6
      </div>
      <div class="col-xs-4 col-sm-6">
        Level 2: .col-xs-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
----------------------------------列排序--------------------------
通过使用 .col-md-push-* 和 .col-md-pull-* 类就可以很容易的改变列（column）的顺序。
<div class="row">
  <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
  <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
</div>
push-3:也就是推3个列的offset
pull-9:拉9个列的offset
----------------------------------文本修饰--------------------------
1.h1~h6(h中家<small>副标题)
2..lead(文本突出)
3.<del>删除的文本(中划线)
4.<s>无用的文本(中划线)
5.<ins>插入的文本(下划线)
6.<u>带下划线的文本
7.<small>小号字,父元素的85%
8.<strong>加粗
9.对齐.text-center .text-left .text-right .text-justify .text-nowrap
10.大小写.text-lowercase .text-uppercase .text-capitalize
11.缩略语
	当鼠标悬停在缩写和缩写词上时就会显示完整内容，Bootstrap 实现了对 HTML 的 <abbr> 元素的增强样式。缩略语元素带有 title 属性，
	外观表现为带有较浅的虚线框，鼠标移至上面时会变成带有“问号”的指针。如想看完整的内容可把鼠标悬停在缩略语上（对使用辅助技术的用户也可见）, 但需要包含 title 属性。
	
	为缩略语添加 .initialism 类，可以让 font-size 变得稍微小些。
	
	<abbr title="attribute">attr</abbr>
12.引用
	将任何 HTML 元素包裹在 <blockquote> 中即可表现为引用样式。对于直接引用，我们建议用 <p> 标签。
	<blockquote>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
	</blockquote>
13.多重引用样式
	添加 <footer> 用于标明引用来源。来源的名称可以包裹进 <cite>标签中。
	<blockquote>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
	  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
	</blockquote>
	
	
	另一种展示风格

	通过赋予 .blockquote-reverse 类可以让引用呈现内容右对齐的效果。
	<blockquote class="blockquote-reverse">
	  ...
	</blockquote>
14.列表
	有序列表
		顺序至关重要的一组元素。
		
		<ol>
		  <li>...</li>
		</ol>
	无样式列表
		<ul class="list-unstyled">
		  <li>...</li>
		</ul>
	内联列表
		通过设置 display: inline-block; 并添加少量的内补（padding），将所有元素放置于同一行。
		<ul class="list-inline">
		  <li>...</li>
		</ul>
	水平排列的描述
		.dl-horizontal 可以让 <dl> 内的短语及其描述排在一行。开始是像 <dl> 的默认样式堆叠在一起，随着导航条逐渐展开而排列在一行。
		
				Description     lists A description list is perfect for defining terms.
	      EuismodVestibulum     id ligula porta felis euismod semper eget lacinia odio sem nec elit.
		Donec id elit non m 	porta gravida at eget metus.
		Malesuada portaEtia     porta sem malesuada magna mollis euismod.
		Felis euismod sempe     eget laciniaFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
		Copy
		<dl class="dl-horizontal">
		  <dt>...</dt>
		  <dd>...</dd>
		</dl>
15.
	通过 text-overflow 属性，水平排列的描述列表将会截断左侧太长的短语。在较窄的视口（viewport）内，列表将变为默认堆叠排列的布局方式。
16.表格
	.table 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线
	.table-striped 类可以给 <tbody> 之内的每一行增加斑马条纹样式。
	.table-bordered类为表格和其中的每个单元格增加边框。
	.table-hover 类可以让 <tbody> 中的每一行对鼠标悬停状态作出响应。
	.table-condensed 类可以让表格更加紧凑，单元格中的内补（padding）均会减半。
	将任何 .table 元素包裹在 .table-responsive 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。
	状态类:
		.active	鼠标悬停在行或单元格上时所设置的颜色
		.success	标识成功或积极的动作
		.info	标识普通的提示信息或动作
		.warning	标识警告或需要用户注意
		.danger	标识危险或潜在的带来负面影响的动作
17.按钮
	.btn
18.图片
	<img src="..." alt="..." class="img-rounded">圆角
	<img src="..." alt="..." class="img-circle">	圆形
	<img src="..." alt="..." class="img-thumbnail"> 带框
19.关闭按钮
	<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
20.三角按钮
	<span class="caret"></span>
21.响应式工具
		超小屏幕	手机 (<768px)	小屏幕平板 (≥768px)	中等屏幕桌面 (≥992px)		大屏幕桌面 (≥1200px)
.visible-xs-*	可见			隐藏				隐藏					隐藏
.visible-sm-*	隐藏			可见				隐藏					隐藏
.visible-md-*	隐藏			隐藏				可见					隐藏
.visible-lg-*	隐藏			隐藏				隐藏					可见
.hidden-xs		隐藏			可见				可见					可见
.hidden-sm		可见			隐藏				可见					可见
.hidden-md		可见			可见				隐藏					可见
.hidden-lg		可见			可见				可见					隐藏


	类组	CSS display
		.visible-*-block	display: block;
		.visible-*-inline	display: inline;
		.visible-*-inline-block	display: inline-block;
		
		因此，以超小屏幕（xs）为例，可用的 .visible-*-* 类是：.visible-xs-block、.visible-xs-inline 和 .visible-xs-inline-block。

		.visible-xs、.visible-sm、.visible-md 和 .visible-lg 类也同时存在。但是从 v3.2.0 版本开始不再建议使用。除了 <table> 相关的元素的特殊情况外，它们与 .visible-*-block 大体相同。