'use strict;'
//Форма поиска
$(function() {
    $('form').on('submit', function() {
        var input = $('.form-search_input').val();
        $.ajax({
            url: "http://api.riffsy.com/v1/search?tag=" + input + "&limit=20",
            success: function(data, textStatus) {
                var ul = document.createElement('ul');
                $.each(data.results, function(i, val) {
                    var li = document.createElement('li');
                    li.classList.add('output-items');
                    li.innerHTML ='<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+ '</br>' +'<img class="image-output" src="'+val.url+'">'+"</a>";
                    ul.appendChild(li);                   
                });
                $('div').html(ul);
            },
        });    
        return false;  
    });   
});

function Human() {
    this.name = 'Igor';
    this.age = '24';
    this.sex = 'male';
    this.height = '185 cm';
    this.weight = '82 kg';
}

function Worker() {
    this.job = 'Ciklum';
    this.salary = '700$';
    this.doWork = function() {
        alert('I am working!');
    }
}

function Student() {
    this.university = 'Taras Shevchenko National University of Kyiv ';
    this.stipend = '150$';
    this.watchTVshows = function() {
        alert('I like to watch TV shows!');
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var Worker1 = new Worker();
var Worker2 = new Worker();
var Worker3 = new Worker();
console.log('Worker1 age:', Worker1.age ,'height:', Worker1.height ,'weight:', Worker1.weight);
console.log('Worker2 age:', Worker2.age ,'height:', Worker2.height ,'weight:', Worker2.weight);
console.log('Worker3 age:', Worker3.age ,'height:', Worker3.height ,'weight:', Worker3.weight);


var Student1 = new Student();
var Student2 = new Student();
var Student3 = new Student();
console.log('Student1 age:', Student1.age ,'height:', Student1.height ,'weight:', Student1.weight);
console.log('Student2 age:', Student2.age ,'height:', Student2.height ,'weight:', Student2.weight);
console.log('Student3 age:', Student3.age ,'height:', Student3.height ,'weight:', Student3.weight);