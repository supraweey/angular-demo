import { NgModule } from "@angular/core";
import { App } from "./app";
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { Card } from "./shared/card/card";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [App],
    bootstrap: [App],
    imports: [BrowserModule, HeaderComponent, User, Tasks, Task, NewTask, Card]
})
export class AppModule {}