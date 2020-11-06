$(function(){
    send_response=function(prop){
        let val=$('#userinput').val()
        $('#userinput').parent('.form').replaceWith(`<span class="form">${val}</span`)
        $.post("message",{key:prop, message:val})
        .done(function(response){
            $('#chat main').append(response);
        })
    }


})

//To get result of the expression defined by user in calculation section
function getResult(){
    var exp=document.getElementById("input1").value;
    var s='The Result is : ';
    document.getElementById('result').innerHTML=s+eval(exp);
}

//To get name of first woman in field selected by user by clicking the button.Clicking different buttons calls different functions.

function Judge(){
    document.getElementById('btn13').addEventListener("click",function(){
        document.getElementById('firstwomanJudge').innerHTML="The First Indian Woman Judge : Justice Anna Chandy";
    })
}

function Climb(){
    document.getElementById('btn14').addEventListener("click",function(){
        document.getElementById('firstwomantoClimb').innerHTML="The First Indian Woman to climb Mount Everest : Bachendri Pal";
    })
}

function IPS(){
    document.getElementById('btn15').addEventListener("click",function(){
        document.getElementById('firstwomanIPS').innerHTML="The First Indian Woman IPS Officer : Kiran Bedi ";
    })
}

function Space(){
    document.getElementById('btn16').addEventListener("click",function(){
        document.getElementById('firstwomaninSpace').innerHTML="The First Indian Woman to go into Space : Kalpana Chawla";
    })
}

function President(){
    document.getElementById('btn17').addEventListener("click",function(){
        document.getElementById('president').innerHTML="The First Indian Woman President of India : Pratibha Patel";
    })
}

function PM(){
    document.getElementById('btn18').addEventListener("click",function(){
        document.getElementById('primeminister').innerHTML="The First Indian Woman Prime Minister of India : Indira Gandhi";
    })
}

function Governor(){
    document.getElementById('btn19').addEventListener("click",function(){
        document.getElementById('governor').innerHTML="The First Indian Woman Governor of India : Sarojini Naidu - Uttar Pradesh";
    })
}

function CM(){
    document.getElementById('btn20').addEventListener("click",function(){
        document.getElementById('chiefminister').innerHTML="The First Woman Chief Minister of India : Sucheta Kripalani - Uttar Pradesh";
    })
}

function Tennis(){
    document.getElementById('btn21').addEventListener("click",function(){
        document.getElementById('tennis').innerHTML="The First Woman Tennis Player : Nirupama Sanjeev";
    })
}

function Badminton(){
    document.getElementById('btn22').addEventListener("click",function(){
        document.getElementById('badminton').innerHTML="The First Woman Badminton Player : Saina Nehwal";
    })
}

function Chess(){
    document.getElementById('btn23').addEventListener("click",function(){
        document.getElementById('chess').innerHTML="The First Woman Chess Player : Konneru Humpy";
    })
}

function Hockey(){
    document.getElementById('btn24').addEventListener("click",function(){
        document.getElementById('hockey').innerHTML="The First Woman Hockey Player : Nikki Pradhan";
    })
}

function Boxer(){
    document.getElementById('btn25').addEventListener("click",function(){
        document.getElementById('boxer').innerHTML="The First Woman Boxer : Manju Rani";
    })
}

function NoblePeace(){
    document.getElementById('btn26').addEventListener("click",function(){
        document.getElementById('nobleprize').innerHTML="The First Woman to be awarded Noble peace prize : Mother Teresa";
    })
}

function BharatRatna(){
    document.getElementById('btn27').addEventListener("click",function(){
        document.getElementById('bharatratna').innerHTML="The First Woman to be awarded Bharat Ratna : Indira Gandhi";
    })
}

function PadmaVibhushan(){
    document.getElementById('btn28').addEventListener("click",function(){
        document.getElementById('padmavibhushan').innerHTML="The First Woman to be awarded Padma Vibhushan : Sumati Morarjee";
    })
}

function Pilot(){
    document.getElementById('btn29').addEventListener("click",function(){
        document.getElementById('pilot').innerHTML="The First Indian Woman Pilot : Durga Banerjee";
    })
}

function TrainDriver(){
    document.getElementById('btn30').addEventListener("click",function(){
        document.getElementById('traindriver').innerHTML="The First Indian Woman Train Driver : Surekha Yadav - Passenger train";
    })
}

function MotorBike(){
    document.getElementById('btn31').addEventListener("click",function(){
        document.getElementById('motorbike').innerHTML="The First Indian Woman to  ride a Motor Bike : Roshini Sharma";
    })
}

function AutoRickshaw(){
    document.getElementById('btn32').addEventListener("click",function(){
        document.getElementById('autorickshaw').innerHTML="The First Indian Woman to drive Auto Rickshaw : Sila Dawre";
    })
}







