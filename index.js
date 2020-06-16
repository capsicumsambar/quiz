function voiceactivate(){
    // Generate Chris statements
    var textArray = [
               `Hi Tejas, Can you solve this math problem for me? If you can, 
               you are a <strong>super cougar</strong>!`,
               `Hi Tejas, Can you work on this problem for me? If you can, you
               are a <strong>cheerful cheetah!</strong>`,
               `Hi Tejas, How about doing this math problem? I am sure, you can do
               it, because you are a <strong>terrific tiger</strong>!`,
               `Hi Tejas, I'd love to see you work hard on this question, you can 
               then say, you are a <strong>laughing lion</strong>`
           ];
       var randomNumber = Math.floor(Math.random()*textArray.length);
       $('img').remove();
       $('#chrisImg').append('<img src="chris.jpg" style="width="120", height="120">')
       document.querySelector('#chrisStatement').innerHTML = 
       textArray[randomNumber];
       
   // Speech API https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
       var synth = window.speechSynthesis;
       var txt = document.querySelector('p').innerHTML;
       var utterThis = new SpeechSynthesisUtterance(txt);
       synth.speak(utterThis);
    }
   // CHARTS
function chartActivate() {
    $('#answer').val("");
    $('.answered').remove();
    $('#my-chart').remove();
    $('#chart-container').append('<canvas id="my-chart"></canvas>');
   var arrChartType=['bar','horizontalBar'];
   var arrChartColor=['red','blue','green'];
   var chartType=arrChartType[Math.floor(Math.random()*2)];
   var colorType=arrChartColor[Math.floor(Math.floor(Math.random()*3))];
   var arrAnimalLabels=[['Rabbit', 'Horse', 'Donkey', 'Deer', 'Pig'],
                        ['Cheetah', 'Lion', 'Tiger','Couger','Jaguar'],
                    ['Falcon','Eagle','Vulture','Owl','Albatross'],
                    ['Orca','Shark','Piranha','Whale','Octopus']];  
   var animalLabels=arrAnimalLabels[Math.floor(Math.random()*arrAnimalLabels.length)];
   var consumedQuantity=[Math.floor(Math.random()*50),Math.floor(Math.random()*50),
                        Math.floor(Math.random()*50), Math.floor(Math.random()*50),
                        Math.floor(Math.random()*50)];
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
       var question = document.querySelector("#question");
       question.style.fontSize = 18;
       var randomNum = Math.floor(Math.random()*5)
       var randomNum2 = randomNum -1;
       if(animalLabels[randomNum-1] == undefined) randomNum2 = randomNum + 1;
       question.innerHTML = "How many <strong>more or less</strong> food stuff did the <strong>"+animalLabels[randomNum]+"</strong> eat than the <strong>"+animalLabels[randomNum2]+"</strong>?";
             
       window.rightAnswer = Math.abs(consumedQuantity[randomNum] - consumedQuantity[randomNum2])

    }
 //Question and answer section
 $('#answer').keypress(function(){
    $("#checkButton").attr("disabled", false); //activate check button only after input box has input
  });
function checkAnswer(){
    var arrAnimalImg = ['lion.jpg','tiger.jpg','puma.jpg','ocelot.jpg','wildkratts.jpg'];
    var animalImg = arrAnimalImg[Math.floor(Math.random()*5)];
    var answer = document.querySelector("#answer");
    var result = document.querySelector("#result");
    if(answer.value*1 == window.rightAnswer) {
            result.innerHTML = "<span class='answered' style='color:green; weight: bold; font-size:10vh'>You are right!</span>";
            speechSynthesis.speak(new SpeechSynthesisUtterance('That is awesome Tejas'));
            $('#chrisButton').remove();
            $('#chrisImgStatement').remove();
            $('#sticker').append(`<img width='120 height='120' src=${animalImg}>`); 
            $("#checkButton").attr("disabled", true);
        }
        else {
            result.innerHTML = "<span class='answered' style='color:red'>That is not correct, please try again</span>";
            speechSynthesis.speak(new SpeechSynthesisUtterance('Try again Tejas'));
            $("#checkButton").attr("disabled", true);
            }
        
    }

