import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'odev';
  result: number;
  container: string = '';
  containerDisplay: string = '0';
  first: number;
  operation: string = '';


  // operation değişkeninde yapacağı işlemi tuttum , operasyon seçilince yeni sayı girmeye başlanacağı için first değişkeninde
  // ilk sayıyı tuttum
  public operationClicked(e) {

    this.operation = e;
    this.first = Number(this.containerDisplay)
    this.container = '';
  }

  // parametre olan e tıklanan sayı ,container değişkeninde stringi birleştirdim , containerdisplayde ekranda gözüken 
  public numClicked(e) {

    if (e === 0 && this.container.length < 1)
      return

    const value: number = e;

    this.container += value.toString();

    this.containerDisplay = this.container;


  }


  // = tuşuna basınca bu metod çalışır , sonucu resultta tuttum , resultun üzerine işlem yapabilmesi için first değişkenine
  //   atadım
  calculateResult() {

    if (this.operation === '+')
      this.result = this.first + Number(this.container)
    else if (this.operation === '-')
      this.result = this.first - Number(this.container)
    else if (this.operation === '*')
      this.result = this.first * Number(this.container)
    else if (this.operation === '/')
      this.result = this.first / Number(this.container)

    this.first = this.result

    this.containerDisplay = this.container = this.result.toString()

    this.result = null;

  }

  // bütün değişkenleri 0lar ,yani başlangıç anına geri döner
  allClear() {

    this.result = 0;
    this.container = '';
    this.containerDisplay = '0';
    this.first = 0;
    this.operation = '';

  }
}
