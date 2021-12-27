$('.page-scroll').on('click', function(e) {

	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	// 1
	// console.log($('body').scrollTop());

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 46
	}, 1300, 'easeInOutExpo');

	e.preventDefault();
});




// parallax

	// about
	$(window).on('load', function() {
		$('.pKiri').addClass('pMuncul');
		$('.pKanan').addClass('pMuncul');
		// $('.pAtas').addClass('pMuncul');
	});

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, ' + wScroll/5 + '%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, ' + wScroll/2.1 + '%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, ' + wScroll/1.3 + '%)'
	});


	// portfolio
	if ( wScroll > $('.portfolio').offset().top - 330 ) {

		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 600 * i );
		});
	}

	if ( wScroll > $('.about').offset().top - 319 ) {

		// console.log('ok');
		$('.about .pAtas').addClass('pMuncul');
	}

	if ( wScroll > $('.about').offset().top - 66 ) {

		// console.log('ok');
		$('.about .skill').addClass('muncul');
		$('.about .body .bar').addClass('grafikGerak');
		$('.anima').addClass('muncul');
	}

});