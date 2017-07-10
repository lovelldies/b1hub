var pressdata = [
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-8.png",
    "date" : "2017-01-05",
    "title" : "IoT at CES 2017: Battle of the Home Automation Start-Ups",
    "readmore" : "http://www.cepro.com/article/iot_at_ces_2017_attack_of_the_home_automation_hubs",
    "download" : "0B-vTv-KRpo43TGhmcjFRV3NrVEMxMDBtNDJuNi1EcFlOU09B"
  },
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-7.png",
    "date" : "2017-01-03",
    "title" : "Accumulus Energy Group (AEG) to bring B.One Hub...",
    "readmore" : "https://www.medianet.com.au/releases/122581/",
  },
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-1.png",
    "date" : "2016-10-05",
    "title" : "The B.One Hub Relay Smart Switch Adds Support for Uber, Fitbit, and IFTT",
    "readmore" : "http://www.24-7pressrelease.com/press-release/preston-developer-choses-bone-iot-hub-for-home-automation-and-security-429153.php",
  },
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-2.png",
    "date" : "2015-12-29",
    "title" : "B.One Hub Talks Surviving Quirky's Fall and Move to Flex",
    "readmore" : "http://www.mysmahome.com/REVIEWS/5248/ces-2016-product-introduction-b-one-smart-hub.aspx",
  },
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-3.png",
    "date" : "2015-09-05",
    "title" : "Intermingling with a Home that Eventually Automates Itself",
    "readmore" : "http://www.financialexpress.com/industry/b-one-the-worlds-most-advanced-and-intelligent-iot-hub-for-home-automation-and-security-is-available-for-pre-order-today-2/130367/",
  },
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-4.png",
    "date" : "2015-07-24",
    "title" : "High-Tech Airstream Takes Tiny Living on the Road—and to Burning Man",
    "readmore" : "http://www.pressbox.co.uk/Technology/Blaze_Automation_Inc_launches_B.One_1606325.html",
  },
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-5.png",
    "date" : "2015-08-05",
    "title" : "B.One Hub Could Be The Next Big Platform For The Smart Home",
    "readmore" : "http://www.thefabricofthings.com/2015/08/05/kickstarter-b-one-smart-hub-blaze-automation/",
  },
  {
    "img" : "http://pickdata.in/b1hub/image/catalog/press-6.png",
    "date" : "2015-07-31",
    "title" : "The Future of Smart Homes - B.One",
    "readmore" : "https://www.kickstarter.com/projects/b-one/the-future-of-smart-homes-bone/posts/1287304",
  }
]

$.each(pressdata, function(i, item){
  var li = $('<li id="'+i+'">');
  var img = $('<img>').attr('src', item.img);
  var p = $('<p class="pressText">').text(item.title);
  var presslinks = $('<div class="press-links"></div>');

  if (item.readmore){
    var readmore = $('<a target="_blank" role="button" class="btn btn-info">Read More</a>').attr('href', item.readmore);
    $(presslinks).append(readmore);
  }

  if (item.download){
    var download = $('<a target="_blank" role="button" class="btn btn-info">Download</a>').attr('href', item.download);
    $(presslinks).append(download);
  }
  
  $(li).append(img).append(p).append(presslinks);
  $(li).appendTo('#press-entries');
});

console.log('Number of entries:' + pressdata.length);
