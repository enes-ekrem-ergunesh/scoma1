import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.page.html',
  styleUrls: ['./agreement.page.scss'],
})
export class AgreementPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.name = "agreement 1";
    this.text = `This is agreement text
    
    sadfas
    asdf
    asdf
    asdf`;
    this.signers = ["Alice", "Bob", "Charles", "Alice", "Bob", "Charles", "Alice", "Bob", "Charles", "Alice", "Bob", "Charles", "Alice", "Bob", "Charles", "Alice", "Bob", "Charles"];
  }
  
  name!: string;
  text!: string;
  signers!: string[];

  //sign the agreement
  sign() {
    console.log("signed");
  }

  // SIGNERS MODAL  
  @ViewChild(IonModal) modal!: IonModal;
  
  close() {
    this.modal.dismiss(null, 'close');
  }

}
