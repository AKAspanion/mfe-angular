import { Location } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  inject,
  Renderer2,
  EventEmitter,
  ViewContainerRef,
  Output,
} from '@angular/core';
import { loadRemoteModule } from '../../utils/federation-utils';

@Component({
  selector: 'federated-component',
  templateUrl: './federated.component.html',
  styleUrls: ['./federated.component.scss'],
})
export class FederatedComponent implements OnInit {
  @Input() remoteEntry: string;
  @Input() remoteName: string;
  @Input() exposedModule: string;
  @Input() componentName = 'default';
  @Input() isApp: boolean;
  @Input() basePathName: string;
  @Input() webComponentSelector: string;
  @Output() onRemoteMount: EventEmitter<string> = new EventEmitter<string>();
  private viewContainerRef = inject(ViewContainerRef);

  constructor(private renderer: Renderer2, private _location: Location) {}

  createRemoteContainer(id: string) {
    const remoteContainer = this.renderer.createElement('div');
    this.renderer.setProperty(remoteContainer, 'id', id);
    this.renderer.appendChild(
      this.viewContainerRef.element.nativeElement,
      remoteContainer
    );

    return remoteContainer;
  }

  ngOnInit(): void {
    const domElement = this.createRemoteContainer(
      this.remoteName + this.exposedModule
    );
    domElement.innerHTML = `<div class="an-p-6 an-h-screen an-w-full">
      <div class="an-rounded-xl an-bg-gray-50 an-w-full an-h-full">
      </div>
    </div>`;
    loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule,
    }).then(federated => {
      domElement.innerHTML = '';
      const entity = federated[this.componentName];

      if (this.isApp) {
        entity.mount(domElement, {
          history: false,
          inContainer: true,
          basename: this.basePathName,
        });
      } else {
        const selector = this.webComponentSelector;
        if (!customElements.get(selector)) {
          customElements.define(selector, entity);
        }
        const element = document.createElement(selector);

        this.viewContainerRef.element.nativeElement.appendChild(element);
      }

      this.onRemoteMount.emit(this.remoteName);
    });
  }
}
