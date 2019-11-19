import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { DialogService } from 'src/app/portfolio/dialog.service';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap';

@Component({
  selector: "smc-data-explorer",
  templateUrl: "./data-explorer.component.html",
  styleUrls: ["./data-explorer.component.scss"]
})
export class DataExplorerComponent implements OnInit {
  isNotSaved = false;
  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  onChange() {
    this.isNotSaved = true;
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (this.isNotSaved) {
      return this.dialogService.confirm("Discard changes?");
    }
    return true;
  }
  
  disableSwitching: boolean;
  @ViewChild('tabset', {static:false}) tabsetEl: ElementRef;
  @ViewChild('tabset',  {static:false}) tabset: TabsetComponent;
  @ViewChild('first',  {static:false}) first: TabDirective;
  @ViewChild('second',  {static:false}) second: TabDirective;
  

  confirmTabSwitch($event) {
    if (this.disableSwitching) {
      const confirm = window.confirm('Discard changes and switch tab?');
      if (confirm) {
        this.disableSwitching = false;
        
        const liArr = (this.tabsetEl.nativeElement.querySelectorAll('ul li'));
        let tabIndex;
        liArr.forEach((li, i) => {
          if(li.contains($event.target)) {
            tabIndex = i;
          }
        });

        setTimeout(() => {
          this.tabset.tabs[tabIndex].active = true;
        });
      }
    }
  }

}
