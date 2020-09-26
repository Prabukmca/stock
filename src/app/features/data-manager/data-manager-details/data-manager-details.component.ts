import {
  Component,
  OnInit,
  ViewChild,
  Type,
  AfterViewInit,
  ViewChildren,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { AdDirective } from "src/app/shared/directives/AdDirective/ad-directive.directive";
import { DataExplorerComponent } from "../data-explorer/data-explorer.component";
import { DynamicComponentOneComponent } from "../components/dynamic-component-one/dynamic-component-one.component";
import { DynamicComponentTwoComponent } from "../components/dynamic-component-two/dynamic-component-two.component";
import { DynamicComponentThreeComponent } from "../components/dynamic-component-three/dynamic-component-three.component";

@Component({
  selector: "smc-data-manager-details",
  templateUrl: "./data-manager-details.component.html",
  styleUrls: ["./data-manager-details.component.scss"]
})
export class DataManagerDetailsComponent implements OnInit, AfterViewInit {
  // @ViewChild(AdDirective, { read: DataExplorerComponent, static: true })
  // insertionPoint: AdDirective;

  // @ViewChild(AdDirective, { read: ViewContainerRef, static: false })  insertionPoint: AdDirective;

  @ViewChild("insertionPoint", { read: ViewContainerRef, static: false })
  insertionPoint: ViewContainerRef;
  componentRef: ComponentRef<DynamicComponentOneComponent>;
  ref1: ComponentRef<DynamicComponentOneComponent>;

  constructor(private cfr: ComponentFactoryResolver) {
    // const dynamicOne = this.cfr.resolveComponentFactory(
    //   DynamicComponentOneComponent
    // );
    // setTimeout(() => {
    //   this.ref1 = this.insertionPoint.createComponent(dynamicOne);
    //   this.ref1.instance.message = "constructor message";
    // }, 1000);
  }

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.loadChildComponent(DynamicComponentOneComponent, "Init message");
  }

  loadChildComponent(componentType: Type<any>, message: string) {
    if (!this.insertionPoint) {
      return;
    }

    let vcr = this.insertionPoint;
    vcr.clear();
    let componentFactory = this.cfr.resolveComponentFactory(componentType);
    if (this.ref1) {
      this.ref1.destroy();
    }
    this.componentRef = vcr.createComponent(componentFactory);
    this.componentRef.instance.message = message;
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  componentOneClick() {
    this.loadChildComponent(
      DynamicComponentOneComponent,
      "first component test"
    );
  }
  componentTwoClick() {
    this.loadChildComponent(
      DynamicComponentTwoComponent,
      "second component test"
    );
  }
  componentThreeClick() {
    this.loadChildComponent(
      DynamicComponentThreeComponent,
      "three component test"
    );
  }
}
