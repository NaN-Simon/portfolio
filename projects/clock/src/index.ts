import'./styles/styles.scss'

class Clock{
  bodyHTML: HTMLElement;
  clock: HTMLElement;
  currentTime: Date;

  constructor(){
    this.bodyHTML=document.body
    this.clock = document.querySelector('.clock') as HTMLInputElement
    this.currentTime = new Date()
  }

  showTime(){
    let hours = this.currentTime.getHours()
    if(hours>=12) {hours = hours - 12}
    const minute = this.currentTime.getMinutes()
    console.log(minute*30)
    return [hours*30,minute*6]
  }

  makeCircle(){
    const circle: HTMLElement = document.createElement('div')
    circle.classList.add('circle')
    return circle
  }

  makeHourArrow(x:number[]){
    const arrowHour: HTMLElement = document.createElement('div')
    arrowHour.classList.add('arrowHour')
    arrowHour.style.transform = `rotate(${x[0]}deg)`
    return arrowHour
  }

  makeMinuteArrow(x:number[]){
    const arrowMinute: HTMLElement = document.createElement('div')
    arrowMinute.classList.add('arrowMinute')
    arrowMinute.style.transform = `rotate(${x[1]}deg)`
    return arrowMinute
  }
  render(){
    console.log(this.clock)
    this.bodyHTML.append(this.clock)
    this.clock.append(this.makeCircle()) 
    const arrowHour = this.makeHourArrow(this.showTime()) //часовая стрелка готовая
    this.clock.append(arrowHour) //append часовой стрелки
    const arrowMinute = this. makeMinuteArrow(this.showTime()) //минтная стрелка готовая
    this.clock.append(arrowMinute) //append часовой стрелки
  }
}

const clock = new Clock()
clock.render()
