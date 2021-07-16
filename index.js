if($(window).width()<480){
    $('.image1>img').attr('src','images/mobile/image-gallery-milkbottles.jpg');
    $('.image2>img').attr('src','images/mobile/image-gallery-orange.jpg');
    $('.image3>img').attr('src','images/mobile/image-gallery-cone.jpg');
    $('.image4>img').attr('src','images/mobile/image-gallery-sugar-cubes.jpg');
}
$('#icon').click(()=>{
    if($('.navbar').attr('class')=="navbar"){
        $('.navbar').attr('class','navbar responsive');
    }else{
        $('.navbar').attr('class','navbar');
    }
})