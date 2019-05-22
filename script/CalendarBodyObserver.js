
class CalendarBodyObserver {
    constructor(elementId) {
      this.element = document.getElementById(elementId);
    }
    update(model) {
      this.element.innerHTML = "";
      //add empty day space before startPos
      for (var i = 0; i <= model.startPos; i++) {
          var emptyDiv = document.createElement("div");
          emptyDiv.classList.add("day");
          emptyDiv.classList.add("empty");
          this.element.appendChild(emptyDiv);
      }
      //add days in month div to calender
      for (var i = 0; i < model.numDays; i++) {
          var dayDiv = document.createElement("div");
          dayDiv.classList.add("day");
          dayDiv.classList.add("label");
          dayDiv.innerHTML = i + 1;
          this.element.appendChild(dayDiv);
      }
    }
  }