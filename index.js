   // CHARTS
function chartActivate() {
    $('#answer1').val("");
    $('#answer2').val("");
    $('#answer3').val("");
    $('.answered').remove();
    $('#my-chart').remove();
    $('#chart-container').append('<canvas id="my-chart"></canvas>');
   var arrChartType=['bar','bar'];
   var arrChartColor=['red','blue','green'];
   var chartType=arrChartType[Math.floor(Math.random()*2)];
   var colorType=arrChartColor[Math.floor(Math.floor(Math.random()*3))];
   var arrAnimalLabels=[['Rabbit', 'Horse', 'Donkey', 'Deer', 'Pig'],
                        ['Cheetah', 'Lion', 'Tiger','Couger','Jaguar'],
                    ['Falcon','Eagle','Vulture','Owl','Albatross'],
                    ['Orca','Shark','Piranha','Whale','Octopus']];  
   var animalLabels=arrAnimalLabels[Math.floor(Math.random()*arrAnimalLabels.length)];
   var consumedQuantity=[Math.floor(Math.random()*40),Math.floor(Math.random()*30),
                        Math.floor(Math.random()*50), Math.floor(Math.random()*40),
                        Math.floor(Math.random()*30)];
   var datasetLabel='Number of food stuff eaten by each animal';
   // Creating chart object with parameters and options
   var ctx = document.getElementById('my-chart').getContext('2d');
   var chart = new Chart(ctx, {
       // The type of chart we want to create
       type: chartType,
       // The data for our dataset
       data: {
           labels: animalLabels,
           datasets: [{
               label: datasetLabel,
               backgroundColor: colorType,
               data: consumedQuantity           
           }]
       },
       // Configuration options go here
       options: {
        maintainAspectRatio: true,
           title: {
               display: true,
               fontSize: 18,
               text: 'Number of food stuff eaten'
                 },
            plugins: {
                datalabels: {
                    color: 'white',
                    anchor: 'end',
                    align: 'start',
                    offset: -10,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 25,
                    backgroundColor: (context) => {
                        return context.dataset.backgroundColor;
                    },
                    font:{
                        weight: 'bold',
                        size: '10'
                    }
                },        
            }            
           }
       });
       var question1 = document.querySelector("#question1");
       question1.style.fontSize = 18;
    //    subtraction
       var randomNum = Math.floor(Math.random()*5)
       var randomNum2 = randomNum -1;
       if(animalLabels[randomNum-1] == undefined) randomNum2 = randomNum + 1;
       question1.innerHTML = "How many <strong>more or less</strong> food stuff did the <strong>"+animalLabels[randomNum]+"</strong> eat than the <strong>"+animalLabels[randomNum2]+"</strong>?";     
       window.rightAnswer1 = Math.abs(consumedQuantity[randomNum] - consumedQuantity[randomNum2])

    //    addition
       var ranNum = Math.floor(Math.random()*5)
       var ranNum2 = ranNum - 1;
       if(animalLabels[ranNum-1] == undefined) ranNum2 = ranNum + 1;
       question2.innerHTML = "How much in <strong>total</strong> did <strong>"+animalLabels[ranNum]+"</strong> and <strong>"+animalLabels[ranNum2]+"</strong> eat?";
       window.rightAnswer2 = consumedQuantity[ranNum] + consumedQuantity[ranNum2];

    //    max and min add
        question3.innerHTML = "What is the <strong>total</strong> of <strong>most</strong> and <strong>least</strong> eaten?";
        window.rightAnswer3 = Math.max(...consumedQuantity) + Math.min(...consumedQuantity);
    }
 //Question and answer section
 $('#answer1').keypress(function(){
    $("#checkButton1").attr("disabled", false); //activate check button only after input box has input
  });
  $('#answer2').keypress(function(){
    $("#checkButton2").attr("disabled", false); //activate check button only after input box has input
  });
  $('#answer3').keypress(function(){
    $("#checkButton3").attr("disabled", false); //activate check button only after input box has input
  });
function checkAnswer1(){
    var arrAnimalImg = ['lion.jpg','tiger.jpg','puma.jpg','ocelot.jpg','greywolf.jpg','cheetah.jpg',
                        'whitetiger.jpg','leopard.jpg','rustycat.jpg','jaguar.jpg','woodpecker.jpg'];
    var animalImg = arrAnimalImg[Math.floor(Math.random()*11)];
    var answer1 = document.querySelector("#answer1");
    var result1 = document.querySelector("#result1");
    if(answer1.value*1 == window.rightAnswer1) {
            result1.innerHTML = "<span class='answered' style='color:green; weight: bold; font-size:3vh'>You are right!</span>";
            speechSynthesis.speak(new SpeechSynthesisUtterance('That is awesome buddy'));
            // $('#chrisButton').remove();
            // $('#chrisImgStatement').remove();
            $('#sticker').append(`<img width='120' height='120' src=${animalImg}>`); 
            $("#checkButton1").attr("disabled", true);
        }
        else {
            result1.innerHTML = "<span class='answered' style='color:red'>That is not correct, please try again</span>";
            speechSynthesis.speak(new SpeechSynthesisUtterance('Try again buddy'));
            $("#checkButton1").attr("disabled", true);
            }
    }
function checkAnswer2(){
    var arrAnimalImg = ['lion.jpg','tiger.jpg','puma.jpg','ocelot.jpg','greywolf.jpg','cheetah.jpg',
    'whitetiger.jpg','leopard.jpg','rustycat.jpg','jaguar.jpg','woodpecker.jpg'];
    var animalImg = arrAnimalImg[Math.floor(Math.random()*11)];
    var answer2 = document.querySelector("#answer2");
    var result2 = document.querySelector("#result2");
    if(answer2.value*1 == window.rightAnswer2) {
        result2.innerHTML = "<span class='answered' style='color:green; weight: bold; font-size:3vh'>You are right!</span>";
        speechSynthesis.speak(new SpeechSynthesisUtterance('That is awesome buddy'));
        $('#sticker').append(`<img width='120' height='120' src=${animalImg}>`); 
        $("#checkButton2").attr("disabled", true);
    }
    else {
        result2.innerHTML = "<span class='answered' style='color:red'>That is not correct, please try again</span>";
        speechSynthesis.speak(new SpeechSynthesisUtterance('Try again buddy'));
        $("#checkButton2").attr("disabled", true);
        }
        
    }
function checkAnswer3(){
    var arrAnimalImg = ['lion.jpg','tiger.jpg','puma.jpg','ocelot.jpg','greywolf.jpg','cheetah.jpg',
    'whitetiger.jpg','leopard.jpg','rustycat.jpg','jaguar.jpg'];
    var animalImg = arrAnimalImg[Math.floor(Math.random()*10)];
    var answer3 = document.querySelector("#answer3");
    var result3 = document.querySelector("#result3");
    if(answer3.value*1 == window.rightAnswer3) {
        result3.innerHTML = "<span class='answered' style='color:green; weight: bold; font-size:3vh'>You are right!</span>";
        speechSynthesis.speak(new SpeechSynthesisUtterance('That is awesome buddy'));
        $('#sticker').append(`<img width='120' height='120' src=${animalImg}>`); 
        $("#checkButton3").attr("disabled", true);
    }
    else {
        result3.innerHTML = "<span class='answered' style='color:red'>That is not correct, please try again</span>";
        speechSynthesis.speak(new SpeechSynthesisUtterance('Try again buddy'));
        $("#checkButton3").attr("disabled", true);
        }
        
    }

