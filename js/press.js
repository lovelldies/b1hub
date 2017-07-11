var pressdata = [
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/choice.png",
    "title" : "B.One Hub home automation controller review",
    "readmore" : "https://www.choice.com.au/electronics-and-technology/gadgets/tech-gadgets/articles/b-one-hub-home-automation-review"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/financial-express.png",
    "title" : "Home automation: B One Hub functions as a single app for over 200 connected devices",
    "readmore" : "http://www.financialexpress.com/industry/technology/home-automation-b-one-hub-functions-as-a-single-app-for-over-200-connected-devices/751242/"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/press-reader.png",
    "title" : "B.One on Press Reader",
    "readmore" : "http://www.pressreader.com/australia/australian-t3/20170301/282256665266033"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/bgr.png",
    "title" : "In the age of IoT, we need smart homes before smart cities can be a reality in India",
    "readmore" : "http://www.bgr.in/news/in-the-age-of-iot-we-need-smart-homes-before-smart-cities-can-be-a-reality-in-india/"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/business-insider.png",
    "title" : "Now, control your doors, lights, ACs and more in a single click",
    "readmore" : "http://www.businessinsider.in/Now-control-your-doors-lights-ACs-and-more-in-a-single-click-with-this-affordable-automation-device-by-Indian-techies/articleshow/58806810.cms"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/businessworld.png",
    "title" : "Blaze Automation unveils B.One hub",
    "readmore" : "http://bwcio.businessworld.in/article/Blaze-Automation-unveils-B-One-hub-/11-05-2017-117948/"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/electronics-b2b.png",
    "title" : "B.One home automation IoT Hub launches in India",
    "readmore" : "http://www.electronicsb2b.com/industry-buzz/b-one-home-automation-iot-hub-launches-india/"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/var-india.png",
    "title" : "Blaze Automation launches B.One Hub",
    "readmore" : "http://www.varindia.com/news/blaze-automation-launches-bone-hub#sthash.LK5mJOmI.4Ykp5a7v.dpbs"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/telangana-today.png",
    "title" : "Home automation hub launched",
    "readmore" : "https://telanganatoday.com/home-automation-hub-launched"
  },
  {
    "img" : "https://lovelldies.github.io/b1hub/assets/img/press/communications-today.png",
    "title" : "Blaze Automation Homes in on Smart Dwellings with Internet of Things",
    "readmore" : "http://www.communicationstoday.co.in/daily-news/11516-blaze-automation-homes-in-on-smart-dwellings-with-internet-of-things"
  }
]

$.each(pressdata, function(i, item){
  var li = $('<li id="'+i+'">');
  var img = $('<img>').attr('src', item.img);
  var p = $('<p class="pressText">').text(item.title);
  var presslink = $('<div class="press-links"></div>');
  var readmore = $('<a target="_blank" role="button" class="btn btn-info">Read More</a>').attr('href', item.readmore);
  
  $(li).append(img).append(p).append(presslink).append(readmore);;
  $(li).appendTo('#press-entries');
});

console.log('Number of entries:' + pressdata.length);