import { PDFDocument } from './../beans/pdfdocument';
import { saveAs } from 'file-saver/FileSaver';
export class FileDownloader {

     static downloadFile(pdfFile: PDFDocument){
        var blob = this.base64ToBlob(pdfFile.fileContent);
        var url= window.URL.createObjectURL(blob);
        //window.open(url);
        saveAs(blob, pdfFile.fileName);
      }

      static base64ToBlob(base64: string):Blob
      {
        let byteCharacters = atob(base64);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) 
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], {type: "application/pdf"});
      }
}
