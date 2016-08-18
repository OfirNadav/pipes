// Description
//  get a collection and properties object, and returns all of the items
//  in the collection before the first that found with the given properties.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'beforeWhere'
})

export class beforeWherePipe implements PipeTransform {
    transform(collection:Array<string>, object:Object) : Array<string> {

        collection = (typeof collection === 'object')
            ? Array.from(collection)
            : collection;

        if(!(collection instanceof Array) || object === 'undefined') return collection;

        var index = collection.map( function( elm ) {
            return object.hasOwnProperty(elm);
        }).indexOf( true );

        return collection.slice(0, (index === -1) ? collection.length : ++index);
    }
}
