import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
<<<<<<< HEAD
=======
import { MatInputModule } from '@angular/material/input';
>>>>>>> a63219da7e5d9d273b83e17cb1f53094ee5ddcd7
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import  { MatInputModule } from '@angular/material/input'; 
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports:[
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
<<<<<<< HEAD
=======
    MatInputModule,
>>>>>>> a63219da7e5d9d273b83e17cb1f53094ee5ddcd7
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
    
  ]
})

export class MaterialModule { }
