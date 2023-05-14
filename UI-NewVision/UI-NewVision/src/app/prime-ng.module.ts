import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChipsModule } from 'primeng/chips';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

@NgModule({
  declarations: [],
  imports: [
    DropdownModule,
    ButtonModule,
    // BrowserAnimationsModule,
    MultiSelectModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CalendarModule,
    DialogModule,
    ColorPickerModule,
    DynamicDialogModule,
    TooltipModule,
    SelectButtonModule,
    SidebarModule,
    ListboxModule,
    InputNumberModule,
    OverlayPanelModule,
    ProgressBarModule,
    SliderModule,
    SlideMenuModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    InputSwitchModule,
    TieredMenuModule,
    MenuModule,
    TreeModule,
    TabMenuModule,
    PasswordModule,
    VirtualScrollerModule,
    ChipsModule,
    TableModule,
    ContextMenuModule,
  ],
  providers: [ConfirmationService],
  exports: [
    DropdownModule,
    ButtonModule,
    // BrowserAnimationsModule,
    MultiSelectModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CalendarModule,
    DialogModule,
    ColorPickerModule,
    DynamicDialogModule,
    TooltipModule,
    SidebarModule,
    ListboxModule,
    InputNumberModule,
    OverlayPanelModule,
    ProgressBarModule,
    SelectButtonModule,
    SliderModule,
    SlideMenuModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    InputSwitchModule,

    TieredMenuModule,
    MenuModule,
    TreeModule,
    TabMenuModule,
    PasswordModule,
    VirtualScrollerModule,
    ChipsModule,
    TableModule,
    ContextMenuModule,
  ],
})
export class PrimeNgModule {}
