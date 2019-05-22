class CalendarTitleObserver {
    constructor(elementId) {
      this.element = document.getElementById(elementId);
    }
    update(model) {
      this.element.innerHTML = "";
      this.element.innerHTML = model.months[model.currentMonth] + " " + model.currentYear;
    }
  }