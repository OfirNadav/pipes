// Description
//  get collection and properties object, and removed elements
//  with this properties

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeWith'
})

export class RemoveWithPipe implements PipeTransform {
    transform(collection:Array<string>, object:Object) : any {
        if(object === 'undefined') {
            return collection;
        }
        collection = (typeof collection === 'object')
            ? Array.from(collection)
            : collection;

        return collection.filter(function (elm) {
            return !object.hasOwnProperty(elm);
        });
    }
}
