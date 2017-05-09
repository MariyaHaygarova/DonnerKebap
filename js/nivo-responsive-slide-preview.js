//
// Nivo slider great tip: responsive slide preview! - http://www.soslignes-ecrivain-public.fr/English-Blog.html
// v1.0
// October 30th, 2013
// Use and abuse!
//


var miniRatio=5, // Tweak this value to increase/decrease preview thumb size
	miniMin=100, // Preview thumb minimum width
	notResponsive, // Assign a width (fixed) value if you want
	bulletsDistance=15, // 15 px between each bullet
	speedMini=200, // Effect animations speed
	already=0, 
	slider, ratioSlider, totalSlides, slideNo, bullets,
	miniContainer, miniHeight, navX, navY;

function slidePreview() {

$('body').append('<div class="miniContainer"><div class="miniFrame"><div class="miniImage"></div></div></div>');
slider=$('.nivoSlider');
bullets=$('.nivo-controlNav a');
miniContainer=$('.miniContainer');
totalSlides=slider.data('nivo:vars').totalSlides;
ratioSlider=slider.height()/slider.width();

for (var i=0; i<totalSlides; i++) {
	$('.miniImage').append('<img src=' + slider.find('img').eq(i).attr('src') + '>');
}

bullets.css({
	margin:0,
	paddingRight:bulletsDistance
})
.eq(totalSlides-1).css({
	paddingRight:0
});

miniContainer.css({cssText:
	'z-index:9999 !important;cursor:pointer;display:none;opacity:0;top:0;left:0;position:absolute;border:3px solid #DDD;border-radius:3px;'
});
$('.miniFrame').css({overflow:'hidden'});

resizeMini();
$(window).resize(function() {resizeMini()});

bullets.on('mouseover', function () {
	already=1;
	slideNo=$(this).index();
	navX=$(this).offset().left - ((miniWidth-bullets.width())/2) -3;
	navY=$(this).offset().top - miniHeight -18;
	if (miniContainer.css('top')=='0px') {
		miniContainer.css({
			left:navX,
			top:navY
		});
	};
	miniContainer.stop(1,1).show().animate({
		left:navX,
		top:navY,
		opacity:1
	},speedMini);
	$('.miniImage').stop(1,1).animate({
		left:-miniWidth*slideNo
	},speedMini);
});

miniContainer.on('mouseover', function () {already=1})
.on('click', function () {bullets.eq(slideNo).trigger('click')});

bullets.add(miniContainer).on('mouseleave', function () {
	already=0;
	var letmesee=setTimeout(function() {
		if (already==1) return
		miniContainer.animate({
			opacity:0
		},speedMini, function() {
			miniContainer.hide()}
		);
		},speedMini+100)
	});
};
function resizeMini() {
	miniWidth=slider.width()/miniRatio;
	if (miniWidth<miniMin) {miniWidth=miniMin};
	if (notResponsive) {miniWidth=notResponsive};
	miniHeight=miniWidth * ratioSlider;
	$('.miniContainer, .miniImage img').css({
		width:miniWidth,
		height:miniHeight,
		top:0
	});
	$('.miniImage').css({
		width:miniWidth*totalSlides,
		position:'relative'
	});
};