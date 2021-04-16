import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelPipe } from './pipes/level/level.pipe';
import { ColorPipe } from './pipes/color/color.pipe';

const PIPES = [
  LevelPipe, 
  ColorPipe
]

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports:[
...PIPES
  ]
})
export class SharedModule { }
