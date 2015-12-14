
var need = 1;
var map = 1;
var calendar = 0;

$('#post-need-btn').click(function() {
	if (need == 1) {
		need = 0;
    $(this).html("<i class='fa fa-list'></i> 探索");
		showPostPage();
	}
	else {
		need = 1;
		$(this).html("<i class='fa fa-plus'></i> 發佈");
		showNeedPage();
	}
});

$('.more').click(function() {
  if (map == 1) {
    map = 0;
    $(this).children().children().removeClass("fa fa-ellipsis-h").addClass("fa fa-chevron-left");
    showMorePage();
  }
  else {
    map = 1;
    $(this).children().children().removeClass("fa fa-chevron-left").addClass("fa fa-ellipsis-h");
    showMapPage();
  }
});


var showPostPage = function() {
	$('#need-page').hide();
	$('#post-page').show();
}

var showNeedPage = function() {
	$('#post-page').hide();
	$('#need-page').show();
}

var showMorePage = function() {
  $('#map-page').hide();
  $('#more-page').show();
}

var showMapPage = function() {
  $('#more-page').hide();
  $('#map-page').show();
}


var showCalendar = function() {
  if (calendar = 0) {
    calendar = 1;
  }
  else {
    calendar = 0;
  }
}


$("select.image-picker").imagepicker({
  hide_select: true,
  show_label : true,
  selected: function() {
    $(".thumbnail").css("background-color", "white");
    $("div.selected").css("background-color", "#FF5511");
  }
});

$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});

$(".confirm-btn").click(function() {
  need = 1;
  $('#post-need-btn').html("POST A NEED");
  showNeedPage();
});



function CalendarControl(controlDiv, map) {

  	// Set CSS for the control border.
  	var controlUI = document.createElement('div');
  	controlUI.style.backgroundColor = '#fff';
  	controlUI.style.borderRadius = '50px';
  	controlUI.style.boxShadow = '0 10px 10px rgba(0,0,0,.3)';
  	controlUI.style.cursor = 'pointer';
  	controlUI.style.marginBottom = '15px';
  	controlUI.style.marginRight = '15px';
  	controlUI.style.textAlign = 'center';
  	controlUI.title = 'Click to show my calendar';
  	controlDiv.appendChild(controlUI);

  	// Set CSS for the control interior.
  	var controlText = document.createElement('div');
  	controlText.style.color = 'rgb(25,25,25)';
  	controlText.style.paddingTop = '10px';
  	controlText.style.paddingBottom = '10px';
  	controlText.style.paddingLeft = '10px';
  	controlText.style.paddingRight = '10px';
  	controlText.innerHTML = '<i class="fa fa-calendar fa-4x"></i>';
  	controlUI.appendChild(controlText);

  	// Setup the click event listeners: show user calendar
  	controlUI.addEventListener('click', function() {
  		showCalendar();
  	});
}

$(document).ready(function() {
  	var latlng = new google.maps.LatLng(25.0439892, 121.5212213);
  	var myOptions = {
    	zoom: 15,
    	center: latlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
    	mapTypeControlOptions: {
	        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	        position: google.maps.ControlPosition.TOP_CENTER
	    },
	    zoomControl: false,
	    scaleControl: true,
	    streetViewControl: true,
	    streetViewControlOptions: {
	        position: google.maps.ControlPosition.LEFT_TOP
	    }
	};
 	
  var map = new google.maps.Map(document.getElementById("map-page"), myOptions);

  var calendarControlDiv = document.createElement('div');
	var calendarControl = new CalendarControl(calendarControlDiv, map);

	calendarControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(calendarControlDiv);

  $(".datepicker").datetimepicker({
    format: 'yyyy-mm-dd',
    startDate: '+0d',
    startView: 2,
    minView: 2,
    maxViewMode: 0,
    todayHighlight: 1,
    autoclose: 1,
    pickerPosition: "top-right",
    forceParse: 0,
    fontAwesome: 1
  });

  $(".timepicker").datetimepicker({
    format: 'HH:ii p',
    autoclose: true,
    showMeridian: true,
    startView: 1,
    minView: 0,
    autoclose: 1,
    pickerPosition: "top-right"
  });
});

