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
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
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
  @Input() state: Observable<any>;
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
    domElement.innerHTML = `
    <div class="an-p-6 an-h-screen an-w-full">
      <div class="an-rounded-xl an-bg-gray-50 an-w-full an-h-full an-flex an-items-center an-justify-center">
        <div role="status">
          <svg aria-hidden="true" class="an-w-8 an-h-8 an-mr-2 an-text-gray-200 an-animate-spin an-fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="an-sr-only">Loading...</span>
        </div>
      </div>
    </div>`;
    loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule,
    })
      .then(federated => {
        domElement.innerHTML = '';
        const entity = federated[this.componentName];

        if (this.isApp) {
          if (this.state.pipe) {
            this.state.pipe(take(1)).subscribe(parsedState => {
              entity.mount(domElement, {
                state: parsedState,
                history: false,
                isStandalone: false,
                basename: this.basePathName,
              });
            });
          } else {
            entity.mount(domElement, {
              history: false,
              isStandalone: false,
              basename: this.basePathName,
            });
          }
        } else {
          const selector = this.webComponentSelector;
          if (!customElements.get(selector)) {
            customElements.define(selector, entity);
          }
          const element = document.createElement(selector);

          this.viewContainerRef.element.nativeElement.appendChild(element);
        }

        this.onRemoteMount.emit(this.remoteName);
      })
      .catch(e => {
        console.error(e);
        domElement.innerHTML = `<div class="an-p-6 an-h-screen an-w-full ">
          <div class="an-flex an-flex-col an-p-12 an-items-center an-justify-center">
            <div class="an-text-3xl an-font-bold an-text-red-500">ERROR</div>
            <div class="an-text-xl an-text-red-500">Failed to load Remote</div>
          </div>
        </div>`;
      });
  }
}
