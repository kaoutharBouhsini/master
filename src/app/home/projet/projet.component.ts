import { FileDownloader } from './../../Utils/file-downloader';
import { PDFDocument } from './../../beans/pdfdocument';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  constructor(private projetService: ProjetService) { }

  ngOnInit() {
  }

  
  download(id : number){
    this.projetService.download(id).subscribe( (pdfFile : PDFDocument) => FileDownloader.downloadFile(pdfFile),
    error => console.log("Error downloading the file."),
    () => console.info("OK"));
  }
}
