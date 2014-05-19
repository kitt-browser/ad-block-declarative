// Ad Blocker

// http://stackoverflow.com/questions/11224324/finding-a-given-element-in-nested-iframes-recursively
// FIXED and modified

var localJQuery = $.noConflict(true);
(function($) {

  console.log('JS content alive, subscribing');

  chrome.runtime.onMessage.addListener(function(message, sender, response_cb) {

    var blockedURL = message.url;
    console.log('JS content blocked URL '+blockedURL);
  });

 // console.log('JS content sending start event');

  chrome.runtime.sendMessage({message:'content script started'}, function(any) {
  });

})(localJQuery);
