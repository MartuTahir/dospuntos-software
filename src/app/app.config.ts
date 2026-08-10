import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  ArrowRight,
  ArrowUpRight,
  CakeSlice,
  CalendarCheck,
  Check,
  Dumbbell,
  FileText,
  Landmark,
  LucideAngularModule,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Palette,
  PawPrint,
  Rocket,
  Stethoscope,
  UserRoundCheck,
  Wrench,
  X,
} from 'lucide-angular';

/** Solo se empaquetan los iconos listados aca, no la libreria entera. */
const ICONOS = {
  ArrowRight,
  ArrowUpRight,
  CakeSlice,
  CalendarCheck,
  Check,
  Dumbbell,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Palette,
  PawPrint,
  Rocket,
  Stethoscope,
  UserRoundCheck,
  Wrench,
  X,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    importProvidersFrom(LucideAngularModule.pick(ICONOS)),
  ],
};
