jQuery(document).ready(function($){
    
    function resolution(){
        $('.infoW').remove();
        $('body').append('<div class="infoW">Width:'+window.innerWidth+'</div>');
        $('body').append('<div class="infoW">Heigth:'+window.innerHeight+'</div>');
        
    }
    
    resolution();
    
    $(window).resize(function(){
     resolution();   
    });
    
    
    
	$('.menuMobile').on('click', function(){
		$('#menu').toggle(400);
	});	
    
    var sabores = {
  'acai-com-banana':'Açaí com Banana',
  'acerola':'Acerola',
  'after-eight-cuordicrema':'After Eight Cuordicrema',
  'amaretto':'Amaretto',
  'ananas':'Ananas',
  'ananas-diet':'Ananas Diet',
  'arancia-carota-e-rapa':'Arancia, Carota e rapa',
  'banana':'Banana',
  'banana-con-nutella':'Banana con Nutella',
  'bellini':'Bellini',
  'biancodelizia':'Biancodelizia',
  'biscottino':'Biscottino',
  'caco':'Caco',
  'caffe':'Caffe',
  'caipirinha-maracuja':'Caipirinha Maracuja',
  'caju':'Caju',
  'caramello':'Caramello',
  'cheescake-al-lampone':'Cheescake al Lampone',
  'cheesecake-de-fragola':'Cheesecake de Fragola',
  'chocolate-branco-com-framboesa':'Chocolate Branco com Framboesa',
  'cioccolato-diet-8':'Cioccolato  Diet',
  'cioccolato-bianco-variegato-lampone-2':'Cioccolato Bianco Variegato Lampone',
  '203':'Cioccolato dell´Equador al Latte',
  '102':'Cioccolato Fondente Satongo',
  'cioccolato-fondente-satongo-allarancia':'Cioccolato fondente Satongo all´Arancia',
  'cioccolato-satongo-al-peperoncino-e-pepe-rosa':'Cioccolato Satongo al Peperoncino e Pepe Rosa',
  'cioccolato-satongo-com-marmellata-di-maracuja':'Cioccolato Satongo com Marmellata di Maracuja',
  'cioccolato-satongo-con-amarena':'Cioccolato Satongo con Amarena',
  'cioccolato-satongo-con-sale-rosa-dellhymalaya':'Cioccolato Satongo con Sale Rosa dell´Hymalaya',
  'cioccolatte-al-ginger':'Cioccolatte al Ginger',
  'cioccotella':'Cioccotella',
  'cocco':'Cocco',
  'cioccolato-diet-2':'Cocco con Cioccolato',
  'colomba-bauducco-al-cioccolato':'Colomba Bauducco al cioccolato',
  'crema':'Crema',
  'crema-di-cannella':'Crema di Cannella',
  'cuor-di-wafer':'Cuor di wafer',
  'cioccolato-diet-3':'Cuordicrema',
  'cupuacu':'Cupuaçu',
  'delizia':'Delizia',
  '205':'Doce de Leite Jersey',
  'fico-nero':'Fico Nero',
  'fico-nero-diet':'Fico Nero Diet',
  'fiordilatte':'Fiordilatte',
  'fiordilatte-jersey':'Fiordilatte Jersey',
  'fiordilatte-variegato-amarena':'Fiordilatte Variegato Amarena',
  'foresta-nera-con-croccante-di-sesamo':'Foresta Nera con Croccante di Sesamo',
  'fragola':'Fragola',
  'fragola-com-chocolate':'Fragola com Chocolate',
  'fruta-do-conde':'Fruta do Conde',
  'gianduia-diet':'Gianduia diet',
  'cioccolato-diet-4':'Goiaba',
  'goiaba-diet':'Goiaba Diet',
  'graviola':'Graviola',
  'jabuticaba':'Jabuticaba',
  'jaca':'Jaca',
  'kiwi':'Kiwi',
  'kiwi-diet':'Kiwi Diet',
  'limao-com-capim-santo':'Limão com Capim Santo',
  'cioccolato-diet-7':'Limone del Lago di Garda',
  'malaga':'Malaga',
  'mandarino':'Mandarino',
  'mango':'Mango',
  'mango-allanice-stellato':'Mango All’anice Stellato',
  'cioccolato-diet-5':'Mango Diet',
  'cioccolato-diet-6':'Maracujá',
  'maracuja-diet':'Maracujá Diet',
  'mentuccia':'Mentuccia',
  'meringata-alle-fragole':'Meringata alle fragole',
  'mora':'Mora',
  '211':'Nocciola Tonda Gentile delle Langhe',
  'nocciolatte':'Nocciolatte',
  'nocciola-tonda-gentile-delle-langhe':'Noce',
  'noce-diet':'Noce diet',
  'pacoca':'Paçoca',
  'panettone':'Panettone',
  '209':'Patrizia',
  'peppa-kids':'Peppa Kids',
  'pera':'Pera',
  'pesca-a-polpa-bianca':'Pesca a Polpa Bianca',
  '207':'Pistacchio Puro di Bronte',
  'pistachio-califoniano':'Pistachio Califoniano',
  'pitanga':'Pitanga',
  'pitanga-diet':'Pitanga diet',
  'prugna':'Prugna',
  'prugna-secca':'Prugna Secca',
  'romeo-e-giulietta':'Romeo e Giulietta',
  'stracciatella':'Stracciatella',
  'strudel-di-mela':'Strudel di Mela',
  'tangerina':'Tangerina',
  'tapioca':'TAPIOCA',
  'uva-crimson':'Uva Crimson',
  'vaniglia-bourbon-del-madagascar':'Vaniglia Bourbon del Madagascar',
  'vaniglia-diet':'Vaniglia Diet',
  'yoghurt':'Yoghurt',
  'yoghurt-con-albicocca':'Yoghurt con Albicocca',
  'yoghurt-con-albicocca-diet':'Yoghurt con Albicocca Diet',
  'yoghurt-con-frutti-di-bosco':'Yoghurt con Frutti di Bosco',
  'yoghurt-con-frutti-di-bosco-diet':'Yoghurt Con Frutti Di Bosco Diet',
  'yoghurt-con-limone':'Yoghurt con Limone',
  'yoghurt-con-maracuja':'Yoghurt con Maracuja',
  'yoghurt-diet':'Yoghurt Diet',
  'cioccolato-diet':'Zabaione',
  'zenzero':'Zenzero'

    }
    
    
    var selectFiltro1 = $('select[name=sabores]');
    var options = '<option value="-1">Selecione um sabor  ( TODOS )</option>';
   
    for(i in sabores){
       options += '<option value="'+i+'">'+sabores[i]+'</option>'; 
        
    }
    
    selectFiltro1.html(options);
    
    
    $("#filtro2 img").on('click',function(){
        var id = $(this).attr('id');
        $('#listaSabores > div').css({'display':'none'});
        $('#listaSabores > div.'+id).css({'display':'block'});
        $("#filtro2 img").removeClass('active');
        $(this).addClass('active');
    
        });
    

    $('select[name=sabores]').on('change',function(){
        var value = $(this).val();
        $('#listaSabores > div').css({'display':'none'});
        $('#listaSabores > div.'+value).css({'display':'block'});
        
        if(value == -1){
          $('#listaSabores > div').css({'display':'block'});    
        }
        
    });
    
    

    
});