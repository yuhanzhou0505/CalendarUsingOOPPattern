class CalendarModel {
    constructor() {
        var today = new Date();
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.numDays = new Date(this.currentYear, this.currentMonth+1, 0).getDate();
        this.startPos = new Date(this.currentYear, this.currentMonth, 0).getDay();
        this.observers = [];
    }

    addObserver(o) {
        this.observers.push(o);
    }
    notifyObservers() {
        for(var o of this.observers) {
          o.update(this);
        }
    }
    
    showNextMonth() {
        this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
        this.currentMonth = (this.currentMonth + 1) % 12;
        this.numDays = this.calculateNumberOfDaysInMonth();
        this.startPos = this.calculateStartPosInMonth();
        this.notifyObservers();
    }
  
    showPreviousMonth() {
        this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
        this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
        this.numDays = this.calculateNumberOfDaysInMonth;
        this.startPos = this.calculateStartPosInMonth();
        this.notifyObservers();
    }
    
    calculateNumberOfDaysInMonth() {
        return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
    }
    calculateStartPosInMonth() {
        return new Date(this.currentYear, this.currentMonth, 0).getDay();
    }
  }