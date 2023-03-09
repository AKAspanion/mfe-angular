import {
  Component,
  Input,
  OnInit,
  inject,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '../../../utils/federation-utils';

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
  @Input() webComponentSelector: string;
  private viewContainerRef = inject(ViewContainerRef);

  constructor(private renderer: Renderer2) {}

  createRemoteContainer(id: string) {
    // Use Angular's Renderer2 to create the div element
    const recaptchaContainer = this.renderer.createElement('div');
    // Set the id of the div
    this.renderer.setProperty(recaptchaContainer, 'id', id);
    // Append the created div to the body element
    this.renderer.appendChild(
      this.viewContainerRef.element.nativeElement,
      recaptchaContainer
    );

    return recaptchaContainer;
  }

  ngOnInit(): void {
    loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule,
    }).then(federated => {
      const entity = federated[this.componentName];
      const domElemet = this.createRemoteContainer(
        this.remoteName + this.exposedModule
      );

      if (this.isApp) {
        entity.mount(domElemet);
      } else {
        const selector = this.webComponentSelector;
        if (!customElements.get(selector)) {
          customElements.define(selector, entity);
        }
        const element = document.createElement(selector);

        this.viewContainerRef.element.nativeElement.appendChild(element);
      }
    });
  }
}
