$(document).ready(function(){
    // console.log('page loaded')

   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClHZzbo7kc9JmA4lKgdAE_ZagGUQ2dIq0",
    authDomain: "train-scheduler-9a8b6.firebaseapp.com",
    databaseURL: "https://train-scheduler-9a8b6.firebaseio.com",
    projectId: "train-scheduler-9a8b6",
    storageBucket: "",
    messagingSenderId: "825100898934",
    appId: "1:825100898934:web:42abbb8121beaa1bedc557",
    measurementId: "G-NZG593LVSB"
  };

firebase.initializeApp(config);

var trainData = firebase.database();

$("#addTrainBtn").on('click', function(){
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = moment($("#firstTrain").val().trim(),"HH:mm").subtract(10,years).format('X');
    var frequency = $("#frequency").val().trim();
});

console.log(firstTrain);
return false;

});