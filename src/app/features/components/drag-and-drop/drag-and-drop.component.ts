import { Component, OnInit, Input } from '@angular/core';
import { Layer } from '../../../features/models/layer.model';
import { LayerService } from '../../../features/services/layer.service';

@Component({
  selector: 'smc-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  title = "Default title";
  layers: Layer[] = [];
  layer: Layer;
  searchLayerId: number;

  @Input() value: boolean;

  constructor(private layerService: LayerService) {}

  ngOnInit() {
    this.getLayers();
  }
  getLayers() {
    this.layerService.getLayers().subscribe(data => {
      this.layers = data;
    });
  }
  getLayer() {
    this.layerService.getLayerById(this.searchLayerId).subscribe(data => {
      this.layer = data;
    });
  }
  add() {
    const layer = {
      id: 0,
      name: "layer4",
      type: "layer4 type",
      description: "layer4 description"
    };

    this.layerService.addLayer(layer).subscribe(data => {
      this.layers.push(data);
    });
  }
  delete(layer: Layer) {
    this.layerService.deleteLayer(layer).subscribe(data => {
      this.layers.splice(this.layers.indexOf(layer), 1);
    });
  }

}
