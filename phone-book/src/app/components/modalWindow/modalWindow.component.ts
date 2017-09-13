import {Component} from '@angular/core';
import { Phone }              from '../../classes/phone';

@Component({
  selector: 'modal-window',
  templateUrl: './modalWindow.component.html',
  styleUrls: ['./modalWindow.component.css']
})
export class ModalComponent {

  public visible = false;
  private visibleAnimate = false;
  private phone:Phone;
  public description:string;

  constructor(){}

  public show(_phone:Phone): void {
    this.visible = true;
    this.phone = _phone;
    this.description = this.phone.description;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
