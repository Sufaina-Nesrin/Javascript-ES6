//created a constructor named Window
function Window (tabs){
    this.tabs = tabs// made a property called tabs 
}
//we have to create common methods to its prototype object
// // When you join two windows into one window
Window.prototype.join = function(otherWindow){
    this.tabs = this.tabs.concat(otherWindow.tabs)
    //this.tabs = [...this.tabs, ...otherWindow.tabs];
    return this
}

// When you open a new tab at the end
Window.prototype.openTab = function(tab){
this.tabs.push('new tab')
return this
}

// When you close a tab
Window.prototype.closeTab = function(index){
 this.tabs.splice(index,1)
 return this
}

//created 3 instances that shows three different windows in the browser
let workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
let socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
let videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine'])


const finalTabs = socialWindow
  .openTab() // Open a new tab for cat memes
  .join(videoWindow.closeTab(2)) // Close third tab in video window, and join
  .join(workWindow.closeTab(1).openTab());
console.log(finalTabs.tabs);
