import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos: any[] = [];
  constructor(public photoService: PhotoService, public alertController: AlertController) {}

  addPhotoToGallery(webPath: string, description: string) {
    this.photoService.addNewToGallery();
    this.photos.unshift({
      webPath: webPath,
      description: description // Aquí agregamos la descripción asociada a la foto
    });
  }
}
