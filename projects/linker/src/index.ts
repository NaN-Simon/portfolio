import'./styles/styles.scss'

/* Code */

class Linker{
  container: HTMLElement
  button: HTMLElement
  inputArea: HTMLInputElement
  outputArea: HTMLInputElement
  

  constructor(){
    this.container=document.body
    this.inputArea = document.querySelector('[name="in"]') as HTMLInputElement
    this.outputArea = document.querySelector('[name="out"]') as HTMLInputElement
    this.button = document.querySelector('[button="lets"]') as HTMLButtonElement
  }
  
  translate() {
    const mySet = new Set()
    const inValue = this.inputArea.value
    const temp = inValue.split('\n')
    temp.forEach(item=>mySet.add(item))
    const temp1: string[] = (Array.from(mySet)) as string[]
    const temp2 = temp1.sort((one, two) => (one < two ? -1 : 1));
    const temp3: string[] = []
    temp2.forEach((el)=>{
      // temp3.push(el)
      if(((el.indexOf('http'))==0)){
        temp3.push(`<p><a href="${el}">${el}</a></p>`)
      }

    })
    this.outputArea.value = temp3.join('\n')

  }

  render(){
    this.button.addEventListener('click',()=>{
      this.translate()
    })

  }
}

const linker = new Linker()
linker.render()