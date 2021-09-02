import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';

import { EnsureModuleLoadedOnce } from './ensure-module-loaded-once.guard';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, NavigationComponent, FooterComponent],
})
export class CoreModule extends EnsureModuleLoadedOnce {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
