var region = ['Setúbal',
'Azores',
'Madeira',
'Aveiro',
'Leiria',
'Viana do Castelo',
'Beja',
'Évora',
'Faro',
'Lisboa',
'Portalegre',
'Santarém',
'Braga',
'Bragança',
'Castelo Branco',
'Coimbra',
'Guarda',
'Porto',
'Viseu',
'Vila Real']

var map = document.querySelector('#map')
var paths= map.querySelectorAll('.mapimage path')


//Display name region dans id = "region-name"
function displayName(region) {
    for (var i = 0; i < region.length; i++){
        if (region[i] !== ''){
            document.getElementById('region-name').firstChild.data = 'Region : '+  region;
        }
        else{
            document.getElementById("region-name").firstChild.data = 'No region detected';
        }
    }
}

paths.forEach(function(path){
    
    path.addEventListener('mouseenter', function(){

        document.querySelectorAll('.is-active').forEach(function(item){
            item.classList.remove('is-active')
        })
        var id = this.id.replace('region-','')
        document.querySelector('#region-'+ id).classList.add('is-active')
    })
})

map.addEventListener('mouseover', function(){
    document.querySelectorAll('.is-active').forEach(function(item){
    item.classList.remove('is-active')
    
    })
})
  

//var colour = '#0bf00b';
//var regions = document.getElementById('region-08');
////regions.setAttribute("style", "fill:" + colour); 
//regions.style.fill = colour;



function colourRegion(data, colour){
    var regions = document.querySelector('#' + data);
    regions.classList.add('colour'+ colour) ;
}

function colourGroupRegion(data){
    for (var colour = 0; colour < data.length; colour++){
        for (var regions = 0; regions < data[colour].length; regions++){
            colourRegion(data[colour][regions], colour);
        }
    }
}

var data1 = [['region-07', 'region-10'],
             ['region-04', 'region-18', 'region-12'], 
             ['region-03', 'region-14', 'region-19']];

colourGroupRegion(data1);

function changeToData1(){
    document.getElementById('mapData1').style.display='block';
    document.getElementById('mapData2').style.display='none';
}

function changeToData2(){
    document.getElementById('mapData1').style.display='none';
    document.getElementById('mapData2').style.display='block';
}
             



    



