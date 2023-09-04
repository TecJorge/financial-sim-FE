import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './financial-api.service';
import { SliderComponent } from './slider/slider.component';
import { TextboxComponent } from './textbox/textbox.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ApiService: ApiService) {}
  title = 'Simulador Prestaçao Automovel';
  selectedOption: string ='option1';
  apiService: any;
  maxValue: number = 48;
  sliderValue: number = 12;
  carInfo: any = {}; 
  @ViewChild(SliderComponent) sliderComponent!: SliderComponent;
  @ViewChild(TextboxComponent) textboxComponent!:TextboxComponent;
  ngOnInit() {
  }
  ngAfterViewInit() {
  }

  updateMaxValue(option: string) {
    this.maxValue = option === 'interno' ? 48 : 60;
  };

  updateSliderValue(sliderValue:number){
    console.log(sliderValue)
    this.sliderValue=sliderValue;
  }

   updateCarInfo(carInfo: any) {
    console.log('Received Car Info:', carInfo);
    this.carInfo = carInfo;
  }

  updateSelectedOption(option: string) {
    this.selectedOption = option;
  }

  sendHttpRequest() {
    if (this.sliderComponent) {
      const sliderValue = this.sliderComponent.sliderValue;
      if(this.selectedOption==='option1'){
        this.selectedOption='INTERNO'
      }else{
        this.selectedOption='EXTERNO'
      }

      const financiamento= {
        mensalidades:sliderValue,
        tipoFinanciamento:this.selectedOption,
      }
    const payload = {
      modelo: this.carInfo.name,
      descritivo: this.carInfo.description,
      valor: this.carInfo.value,
      financiamento
    };
    console.log(payload)
      this.ApiService.sendRequest(payload).subscribe(
        (response:any) => { 
          console.log(response)
          if (!response.error) {
            const result = response;
            const resultMessage = response.resultMessage
            console.log(resultMessage)
            alert(`Congratz : ${resultMessage}`);
            const confirmSave = window.confirm('Deseja Ser contactado posteriormente?');
  
            if (confirmSave) {
              const saveInfo = {
                nome:this.textboxComponent.nameValue,
                numeroTelemovel:this.textboxComponent.numericInputValue,
                email:this.textboxComponent.emailInputValue,
                modelo: this.carInfo.name,
                descritivo: this.carInfo.description,
                valor: this.carInfo.value,
                financiamento,
                prestacao:result.prestacaoMensal
              }
              console.log(saveInfo)
              this.ApiService.saveSimulation(saveInfo).subscribe((resposta:any)=>{
                if(!resposta.error){
                  console.log(resposta)
                  const resultado = resposta;
                  console.log(resultado)
                  const resultadoMsg = resposta.resultMessage
                  console.log(resultadoMsg)
                  alert(`Congratz : ${resultadoMsg}`);
                }else{
                  const resultado = resposta;
                  const resultadoMsg = resposta.resultMessage
                  console.log(resultadoMsg)
                  alert(`Erro : ${resultadoMsg}`);
                }
              })
            }
          } else {
            console.error('Request failed with status code:', response.status);
          }
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
}
}
}
