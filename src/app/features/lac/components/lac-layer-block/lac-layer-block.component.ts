import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl
} from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { LacService } from "../../services/lac.service";
import { LacFacade } from "../../facades/lac-facade";

@Component({
  selector: "smc-lac-layer-block",
  templateUrl: "./lac-layer-block.component.html",
  styleUrls: ["./lac-layer-block.component.scss"]
})
export class LacLayerBlockComponent implements OnInit {
  typeLoadName: string;
  lacFormGroup: FormGroup;
  pricingGroups = [1, 2, 3, 4];
  typeLoadList = [];

  typeLoadControl: AbstractControl;
  layerGroupControls: FormGroup;

  get lacFormArray(): FormArray {
    return this.lacFormGroup.get("lacFormArray") as FormArray;
  }

  zonePerilList = [];
  constructor(
    private fb: FormBuilder,
    private lacService: LacService,
    private lacFacade: LacFacade
  ) {}

  ngOnInit() {
    this.lacFacade.LayerMethodOne();
    this.lacFacade.PgMethodOne();
    this.initControls();
    this.initTypeLoads();
  }
  ngAfterViewInit() {
    // const typeLoadControl = this.lacFormArray.get("typeLoad");
    // typeLoadControl.valueChanges.pipe(debounceTime(200)).subscribe(data => {
    //   this.lacFormArray.get("zonePeril").setValue(zonePerilList);
    // });
  }
  initControls() {
    this.lacFormGroup = this.fb.group({
      lacFormArray: this.fb.array([])
    });
    this.pricingGroups.forEach(element => {
      this.layerGroupControls = this.createControls();

      const myFormArray = <FormArray>this.lacFormGroup.get("lacFormArray");

      this.layerGroupControls.get("groupIndex").patchValue(myFormArray.length);

      this.layerGroupControls.valueChanges.subscribe(data =>
        this.onValuesChanged(data)
      );

      this.lacFormArray.push(this.layerGroupControls);

      this.lacFormArray.valueChanges.subscribe(value =>
        this.onFormArrayValueChanged(value)
      );

      const zonePerilList = [
        "zonePeril1",
        "zonePeril2",
        "zonePeril3",
        "zonePeril4"
      ];

      const typeLoadControl = this.layerGroupControls.get("typeLoad");
      typeLoadControl.valueChanges.subscribe(data => {
        this.layerGroupControls.get("zonePeril").value.values = zonePerilList;
        // this.layerGroupControls.get("zonePeril").patchValue("zonePerilList2");
        // this.layerGroupControls.get("zonePeril").setValue(zonePerilList);
        // this.zonePerilList = zonePerilList;
      });
    });
  }

  initTypeLoads() {
    setTimeout(() => {
      this.typeLoadList = [
        { name: "typeload1", zonePeril: ["z1", "z2"] },
        { name: "typeload2" },
        { name: "typeload3" },
        { name: "typeload4", zonePeril: ["z5", "z6"] }
      ];
    }, 2000);
    // this.lacService.getTypeLoads().subscribe(data => {
    //   setTimeout(() => {
    //     this.typeLoadList = data;
    //   }, 500);
    // });
  }

  onFormArrayValueChanged(value: any): void {
    console.log("on form array value changed", value);
  }
  onValuesChanged(data: any): void {
    console.log("on value changed", data);
    // const changedGroup = this.lacFormArray.controls[data.groupIndex]
    //   .get("zonePeril")
    //   .patchValue([...zonePerilList]);
  }
  createControls() {
    return this.fb.group({
      groupIndex: "",
      typeLoad: "",
      zonePeril: "",
      subCategory: ""
    });
  }
  onTypeChange($event, index) {
    console.log($event);
  }
}
