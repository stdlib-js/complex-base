/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import cast = require( '@stdlib/complex-base-cast-return' );
import wrap = require( '@stdlib/complex-base-wrap-function' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Wraps an n-ary function and casts a function's return value to a complex number.
	*
	* ## Notes
	*
	* -   The returned function **assumes** that the wrapped function returns either a real or complex number.
	* -   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.
	*
	* @param fcn - function to wrap
	* @param nargs - number of arguments
	* @param ctor - complex number constructor
	* @throws second argument must be a nonnegative integer
	* @returns wrapped function
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* function add( x, y, z, w, v, t ) {
	*     return x + y + z + w + v + t;
	* }
	*
	* var f = ns.cast( add, 6, Complex64 );
	*
	* // ...
	*
	* var z = f( 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 33.0
	*
	* var im = imagf( z );
	* // returns 0.0
	*/
	cast: typeof cast;

	/**
	* Wraps an n-ary function accepting complex number arguments to support providing both real and complex numbers.
	*
	* ## Notes
	*
	* -   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
	* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
	*
	* @param fcn - function to wrap
	* @param nargs - number of arguments
	* @param ctor - complex number constructor
	* @throws second argument must be a nonnegative integer
	* @returns wrapped function
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* function add( x, y, z, w, v, t ) {
	*     var re = realf( x ) + realf( y ) + realf( z ) + realf( w ) + realf( v ) + realf( t );
	*     var im = imagf( x ) + imagf( y ) + imagf( z ) + imagf( w ) + imagf( v ) + imagf( t );
	*     return new Complex64( re, im );
	* }
	*
	* var f = ns.wrap( add, 6, Complex64 );
	*
	* // ...
	*
	* var z = f( 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 33.0
	*
	* var im = imagf( z );
	* // returns 0.0
	*/
	wrap: typeof wrap;
}

/**
* Base (i.e., lower-level) complex number functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
