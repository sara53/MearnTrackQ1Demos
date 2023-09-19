import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './components/TwoWayBinding/NormalWayandRefernce/test.component';
import { ContentComponent } from './components/TwoWayBinding/twoWayUsingModule/content.component';
import { FormsModule } from '@angular/forms';
import { OurcontentComponent } from './components/studycontent/ourcontent.component';
import { TestDirComponent } from './components/Directives/test-dir.component';
import { TodosComponent } from './components/demo/todos.component';
import { LoginComponent } from './components/demo/login/login.component';

@NgModule({
  declarations: [AppComponent, TestComponent, ContentComponent, OurcontentComponent, TestDirComponent, TodosComponent, LoginComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
