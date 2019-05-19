import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate();
    }
}

// TODO: Read this 

// Hi!

// Perhaps my detailed explanation might help to understand what is happening here.
// If something remains unclear, please feel free to ask again.

// Jost

// -----------

// First of all: The canDeactivateGuard might appear rather confusing at first glance, since two different interfaces are nested into each other. Remember: By defining an interface we force a class to implement a method which takes parameters of a specific type and returns a value of a specific type.
// This being said, it might become clearer how the different elements of the canDeactivateGuard are working together, if you simplify the course code first:

// 1.
// In the CanDeactivateGuard class in can-deactivate-guard.service.ts replace the interface CanComponentDeactivate by the type of the component on which you want to use the guard (EditServerComponent):

//     export class CanDeactivateGuard implements CanDeactivate<EditServerComponent> {
//        canDeactivate(component: EditServerComponent, …)
//        …
//     }

// (Note: There are two replacements required!)

// 2.
// Remove the declaration of the CanComponentDeactivate interface from the same file completely:

//     export interface CanComponentDeactivate {
//       canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
//     }

// 3.
// Delete implements CanComponentDeactivate from edit-server.component.ts.

// -----

// After these modifications the course code is much simpler, but it works in exactly the same way.
// Like in the canActivateGuard you have to implement an interface (in this case CanDeactivate – note the uppercase notation, since it’s a type, 
// no function!), so that the guard‘s canDeactivate() method is forced to take specific parameters and to return a boolean (or a Promise<boolean> 
// or Observable<boolean>) .
// But in spite of the simplifications the canDeactivateGuard it is still a little more complex than the canActivateGuard. Additionally you have to …

// 1. … pass the component as a parameter into the canDeactivate() function,
// 2. … apply the component type to the CanDeactivate interface,
// 3. … return an appropriate method of the component (here also called canDeactivate(), but the name is up to you).

// The reason for the higher degree of complexity is that only the component itself can decide if the user is allowed to leave (e.g. depending on 
// whether everything is saved correctly etc.). The actual check whether the user is allowed to leave a page happens in the component’s canDeactivate() 
// method, and the result of this check is then simply returned by the guard’s canDeactivate() method (either synchronously, as a boolean, 
// or asynchronously, as a Promise or Observable wrapping a boolean).

// -----

// With this in mind the code of the simplified version should become clearer. After having played around with this version and fully understood how 
// it works you can then revert to the original version.

// -----

// This original version has to be more complex in order to be generic: The advantage is that you can use this canDeactivateGuard version not 
// only on one particular component but on all components which implement the CanComponentDeactivate interface.
// This is a custom interface, which means that this name is totally up to you, and it forces each component which implements this interface to 
// provide an own canDeactivate() method (this name is also up to you).
// Of course it would also be possible to define the custom CanComponentDeactivate interface in a separate file, since it is not directly related 
// to the guard.

// -----

// Related to your first question:
// canDeactivate under 1. is required by the built-in interface.
// canDeactivate under 2., defined in our custom interface, is used in the component class, and could be named differently.