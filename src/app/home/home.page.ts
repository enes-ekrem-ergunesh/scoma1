import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //Initialize storage
  constructor(private storage: Storage) {}

  //On initialization
  async ngOnInit() {
    //Create storage object
    await this.storage.create();
    //Get agreements from storage
    if(!await this.storage.get('agreements')){
      await this.storage.set('agreements', []);
    }
    else{
      this.agreements = await this.storage.get('agreements');
    }
  }

  //Update the array when returning back from edit component
  async ionViewWillEnter(){
    //Get agreements from storage
    if(!await this.storage.get('agreements')){
      await this.storage.set('agreements', []);
    }
    else{
      this.agreements = await this.storage.get('agreements');
    }
  }

  // ADD AGREEMENT MODAL  
  @ViewChild(IonModal) modal!: IonModal;
  
  //Class variables
  name!: string;
  text!: string;
  agreement!: {
    id: number;
    name: string,
    text: string,
    creationDate: number,
    signers: string[],
    signingDates: number[],
  };
  agreements!: {
    id: number;
    name: string,
    text: string,
    creationDate: number,
    signers: string[],
    signingDates: number[],
  }[];

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    this.modal.dismiss(this.text, 'confirm');
  }

  //On submit new todo event
  async onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      //Add agreement
      // this.addTodo(this.name, this.text);
    }
    //Clear title and description input texts
    this.name = '';
    this.text = '';
  }

}
