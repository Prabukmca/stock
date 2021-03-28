import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Observable } from "rxjs";
import { DialogService } from "src/app/portfolio/dialog.service";
import { TabsetComponent, TabDirective } from "ngx-bootstrap";

@Component({
  selector: "smc-data-explorer",
  templateUrl: "./data-explorer.component.html",
  styleUrls: ["./data-explorer.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataExplorerComponent implements OnInit {
  @Input() vm: string;
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
  @ViewChild("tabset") tabsetEl: ElementRef;
  @ViewChild("tabset") tabset: TabsetComponent;
  @ViewChild("first") first: TabDirective;
  @ViewChild("second") second: TabDirective;

  confirmTabSwitch($event) {
    if (this.disableSwitching) {
      const confirm = window.confirm("Discard changes and switch tab?");
      if (confirm) {
        this.disableSwitching = false;

        const liArr = this.tabsetEl.nativeElement.querySelectorAll("ul li");
        let tabIndex;
        liArr.forEach((li, i) => {
          if (li.contains($event.target)) {
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
